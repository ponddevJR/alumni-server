import { envConfig, transporter } from "../config/config";
import { PrismaClient } from "../src/generated/prisma";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

const randomNum = () => {
  let random = Math.floor(Math.random() * 999999);
  while (random.length < 6) {
    random = Math.floor(Math.random() * 999999);
  }
  return random;
};

export const authController = {
  login: async ({ body, set, jwt }) => {
    try {
      const { username, password } = body;

      if (!username || !password) {
        return (set.status = 400);
      }

      // admin
      if (
        username === "alumni_president_admin_2025" &&
        password === "RT1tu+uVj+n0_president_rmu"
      ) {
        const payload = {
          id: "president_alumni",
          signInDate: Date.now(),
          roleId: 5,
        };
        const token = await jwt.sign(payload);
        set.headers[
          "Set-Cookie"
        ] = `token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=86400`;
        set.status = 200;
        return {
          roleId: 5,
          ok: true,
        };
      }

      let user = await prisma.alumni.findUnique({
        where: {
          alumni_id: username,
        },
        select: {
          fname: true,
          alumni_id: true,
          allowedAccount: true,
          passwordHash: true,
          canUse: true,
        },
      });
      let roleId = 1;

      if (!user) {
        user = await prisma.professor.findUnique({
          where: {
            professor_id: username,
          },
          select: {
            professor_id: true,
            univercity_position: true,
            passwordHash: true,
            canUse: true,
          },
        });

        if (!user) {
          return { err: "ไม่พบข้อมูลผู้ใช้งาน" };
        }

        roleId = 2;

        const aj_role = user.univercity_position;
        if (aj_role.includes("รองคณบดี") || aj_role.includes("คณบดี")) {
          roleId = 3;
        }
        if (aj_role.includes("รองอธิการบดี") || aj_role.includes("อธิการบดี")) {
          roleId = 4;
        }
      }

      const authNum = randomNum();

      // เข้าสู่ระบบครั้งแรก
      if (roleId === 1 && !user.allowedAccount) {
        if (username !== password) {
          return { err: "รหัสผ่านไม่ถูกต้อง" };
        }

        // สร้างช่องทางติดต่อ
        await prisma.alumni_contract.create({
          data: {
            alumniId: username,
            email1: username + "@rmu.ac.th",
          },
        });

        const mailOptions = {
          from: envConfig.mail_user,
          to: username + "@rmu.ac.th",
          subject: "เข้าสู่ระบบครั้งแรก",
          text: `รหัสยืนยันตัวตนเข้าใช้งาน\nระบบสารสนเทศเครือข่ายศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคามของ${user.fname} \n"${authNum}"`,
        };

        await transporter.sendMail(mailOptions);
        return { isFirstLogin: true, key: authNum, alumni_id: user.alumni_id };
      }

      const isMatch = await bcryptjs.compare(password, user.passwordHash || "");
      if (roleId < 2 && !isMatch) {
        return { err: "รหัสผ่านไม่ถูกต้อง" };
      }

      // ตรวจสอบสถานะบัญชี
      if (!user.canUse) {
        return {
          err: "บัญชีของคุณถูกระงับอยู่ในขณะนี้ โปรดติดต่อผู้เกี่ยวข้อง",
        };
      }

      //   ยังไม่เปลี่ยนรหัสผ่าน
      if (roleId === 1 && username === password) {
        const toEmail = await prisma.alumni_contract.findUnique({
          where: {
            alumniId: username,
          },
          select: {
            email1: true,
            email2: true,
          },
        });
        const mailOptions = {
          from: envConfig.mail_user,
          to: toEmail.email1 || toEmail.email2,
          subject: "รหัสยืนยันตัวตนเข้าใช้งานระบบ",
          text: `รหัสยืนยันตัวตนเข้าใช้งาน\nระบบสารสนเทศเครือข่ายศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคามของ${user.fname} \n"${authNum}"`,
        };

        await transporter.sendMail(mailOptions);
        return { isFirstLogin: true, key: authNum, alumni_id: user.alumni_id };
      } else {
        if (roleId > 1) {
          const hadprivacy = await prisma.user_privacy.findUnique({
            where: {
              professorId: username,
            },
            select: {
              professorId: true,
            },
          });
          if (!hadprivacy) {
            await prisma.user_privacy.create({
              data: {
                professorId: username,
                allowedProfessorSendEmail: false,
                allowedAlumniSendEmail: true,
                seeProfile: true,
                seeEmail: true,
                seeFacebook: true,
                seePhone: true,
              },
            });
          }
        }
        const payload = {
          id: roleId < 2 ? user.alumni_id : user?.professor_id,
          signInDate: Date.now(),
          roleId,
        };
        const token = await jwt.sign(payload);
        set.headers[
          "Set-Cookie"
        ] = `token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=86400`;
        set.status = 200;
        return {
          roleId,
          ok: true,
        };
      }
    } catch (err) {
      console.error(err);
      set.status = 500;
      return { err };
    }
  },

  authSuccess: async ({ body, set, jwt }) => {
    try {
      const { alumni_id } = body;
      if (!alumni_id) {
        return (set.status = 400);
      }

      const alumni = await prisma.alumni.findUnique({
        where: {
          alumni_id,
        },
        select: {
          allowedAccount: true,
          alumni_id: true,
        },
      });
      if (!alumni) {
        return (set.status = 400);
      }
      if (!alumni.allowedAccount) {
        const facultyId = Number(alumni_id.substring(3, 5));
        const depId = Number(alumni_id.substring(4, 8));
        const salt = await bcryptjs.genSalt(12);
        const hash = await bcryptjs.hash(alumni_id, salt);
        await prisma.alumni.update({
          where: {
            alumni_id,
          },
          data: {
            allowedAccount: true,
            passwordHash: hash,
            facultyId,
            departmentId: depId,
            year_start: Number(
              `${new Date().getFullYear() + 543}`.substring(0, 2) +
                `${alumni.alumni_id}`.substring(0, 2)
            ),
          },
        });
        const hadPrivacy = await prisma.user_privacy.findFirst({
          where: {
            alumniId: alumni.alumni_id,
          },
        });
        if (!hadPrivacy) {
          await prisma.user_privacy.create({
            data: {
              alumniId: alumni.alumni_id,
            },
          });
        }
      }

      const payload = {
        id: alumni.alumni_id,
        signInDate: Date.now(),
        roleId: 1,
      };
      const token = await jwt.sign(payload);
      set.headers[
        "Set-Cookie"
      ] = `token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=86400`;

      set.status = 200;
      return {
        roleId: 1,
        ok: true,
      };
    } catch (err) {
      console.error(err);
      set.status = 500;
      return { err };
    }
  },

  checkLogin: async ({ store, set }) => {
    try {
      const user = store.user;
      const roleId = store.user.roleId;
      if (!user) {
        return (set.status = 400);
      }

      let data;
      if (roleId < 2) {
        data = await prisma.alumni.findFirst({
          where: {
            alumni_id: user?.id,
          },
          select: {
            profile: true,
            fname: true,
          },
        });
      } else {
        data = await prisma.professor.findFirst({
          where: {
            professor_id: user?.id,
          },
          select: {
            profile: true,
            facultyId: true,
            departmentId: true,
            fname: true,
          },
        });
      }

      set.status = 200;
      return {
        ...user,
        ...data,
      };
    } catch (err) {
      console.error(err);
      set.status = 500;
      return { err };
    }
  },
  logout: ({ set }) => {
    set.headers[
      "Set-Cookie"
    ] = `token=; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=0`;

    set.status = 200;
    return { ok: true };
  },
  forgotpass_checkuser: async ({ body, set }) => {
    try {
      const { username } = body;
      if (!username) return (set.status = 400);

      let user;
      user = await prisma.alumni.findUnique({
        where: {
          alumni_id: username,
        },
        select: {
          email1: true,
          email2: true,
          fname: true,
          allowedAccount: true,
        },
      });
      let isAlumni = true;
      if (!user) {
        user = await prisma.professor.findUnique({
          where: {
            professor_id: username,
          },
          select: {
            email1: true,
            email2: true,
            fname: true,
          },
        });
        isAlumni = false;

        if (!user) {
          return { err: "ไม่พบผู้ใช้งาน" };
        }
      }

      if (isAlumni && !user.allowedAccount) {
        return {
          err: "พบว่าคุณยังไม่เคยเข้าสู่ระบบสารสนเทศเครือข่ายศิษย์เก่า โปรดอ่านรายละเอียดที่หน้าแรก",
        };
      }

      if (!user.email1 && !user.email2) {
        return { err: "ไม่พบอีเมล โปรดติดต่อเจ้าหน้าที่ผู้ประสานงาน" };
      }

      const authNum = randomNum();

      const toEmail = user.email1 || user.email2;
      const mailOptions = {
        from: envConfig.mail_user,
        to: toEmail,
        subject: "รหัสยืนยันตัวตนผู้ลืมรหัสผ่าน",
        text: `รหัสยืนยันตัวตนเพื่อเปลี่ยนรหัสผ่านของคุณ${user.fname} \n"${authNum}"`,
      };

      await transporter.sendMail(mailOptions);
      set.status = 200;
      return { ok: true, auth: authNum };
    } catch (err) {
      console.error(err);
      set.status = 500;
      return { err };
    }
  },
  forgotpass_newpass: async ({ body, set }) => {
    try {
      const { newPass, username } = body;
      if (!newPass || !username) return (set.status = 400);

      let update;
      let user;
      user = await prisma.alumni.findUnique({
        where: {
          alumni_id: username,
        },
        select: {
          alumni_id: true,
        },
      });

      const salt = await bcryptjs.genSalt(12);
      const hash = await bcryptjs.hash(newPass, salt);

      if (user) {
        update = await prisma.alumni.update({
          where: {
            alumni_id: username,
          },
          data: {
            passwordHash: hash,
          },
        });
      } else {
        user = await prisma.professor.findUnique({
          where: {
            professor_id: username,
          },
          select: {
            professor_id: true,
          },
        });
        if (!user) {
          return { err: "ไม่พบผู้ใช้งาน" };
        }

        update = await prisma.professor.update({
          where: {
            professor_id: username,
          },
          data: {
            passwordHash: hash,
          },
        });
      }

      if (!update) {
        return (set.status = 400);
      }

      set.status = 200;
      return { ok: true };
    } catch (err) {
      console.error(err);
      set.status = 500;
      return { err };
    }
  },
};
