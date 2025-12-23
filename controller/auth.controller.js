import { envConfig, transporter } from "../config/config";
import { PrismaClient } from "../src/generated/prisma";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

const randomNum = () => {
  let random = Math.floor(Math.random() * 999999);
  while (random.length < 6 || random.length > 6) {
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
            email: true,
            fname: true,
            allowedAccount: true,
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

      // ตรวจสอบสถานะบัญชี
      if (!user.canUse) {
        set.status = 400;
        return {
          err: "บัญชีของคุณถูกระงับอยู่ในขณะนี้ โปรดติดต่อผู้เกี่ยวข้อง",
        };
      }

      const hadprivacy = await prisma.user_privacy.findUnique({
        where: {
          ...(roleId == 1
            ? {
                alumniId: user.alumni_id,
              }
            : { professorId: user.professor_id }),
        },
        select: {
          ...(roleId === 2
            ? {
                professorId: true,
              }
            : { alumniId: true }),
        },
      });
      if (!hadprivacy) {
        await prisma.user_privacy.create({
          data: {
            ...(roleId === 2
              ? {
                  professorId: user.professor_id,
                }
              : { alumniId: user.alumni_id }),
            allowedProfessorSendEmail: false,
            allowedAlumniSendEmail: true,
            seeProfile: true,
            seeEmail: true,
            seeFacebook: true,
            seePhone: true,
          },
        });
      }

      // เข้าสู่ระบบครั้งแรก
      if (!user.allowedAccount) {
        if (username !== password) {
          return { err: "รหัสผ่านไม่ถูกต้อง" };
        }

        if (roleId === 1) {
          // สร้างช่องทางติดต่อศิษย์เก่า
          await prisma.alumni_contract.create({
            data: {
              alumniId: username,
              email1: username + "@rmu.ac.th",
            },
          });
        }

        if (roleId > 1 && !user?.email) {
          return {
            err: "ไม่พบอีเมลของท่าน โปรดติดต่อเจ้าหน้าที่ผู้เกี่ยวข้อง",
          };
        }

        const mailOptions = {
          from: envConfig.mail_user,
          to: roleId === 1 ? username + "@rmu.ac.th" : user.email,
          subject: "เข้าสู่ระบบครั้งแรก",
          text: `รหัสยืนยันตัวตนเข้าใช้งาน\nระบบสารสนเทศเครือข่ายศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคามของคุณ${
            user.fname || ""
          } \n"${authNum}"`,
        };

        await transporter.sendMail(mailOptions);
        return {
          isFirstLogin: true,
          key: authNum,
          user: user.alumni_id || user?.professor_id,
        };
      }

      const isMatch = await bcryptjs.compare(password, user.passwordHash || "");
      if (!isMatch) {
        return { err: "รหัสผ่านไม่ถูกต้อง" };
      }

      //   ยังไม่เปลี่ยนรหัสผ่าน
      if (username === password) {
        let toEmail = null;
        if (roleId === 1) {
          const alumni = await prisma.alumni_contract.findUnique({
            where: {
              alumniId: username,
            },
            select: {
              email1: true,
              email2: true,
            },
          });
          toEmail = alumni.email1 || alumni.email2;
        } else {
          const professor = await prisma.professor.findUnique({
            where: {
              professor_id: username,
            },
            select: {
              email: true,
            },
          });
          toEmail = professor.email;
        }
        if (!toEmail) {
          return {
            err: "คุณยังไม่เปลี่ยนรหัสผ่านและไม่พบอีเมลเพื่อส่งรหัสยืนยันตัวตน โปรดติดต่อเจ้าที่ผู้เกี่ยวข้อง",
          };
        }

        const mailOptions = {
          from: envConfig.mail_user,
          to: toEmail,
          subject: "รหัสยืนยันตัวตนเข้าใช้งานระบบ",
          text: `รหัสยืนยันตัวตนเข้าใช้งาน\nระบบสารสนเทศเครือข่ายศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคามของ${user.fname} \n"${authNum}"`,
        };

        await transporter.sendMail(mailOptions);
        return {
          isFirstLogin: true,
          key: authNum,
          user: user.alumni_id || user?.professor_id,
        };
      } else {
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
    } catch (error) {
      console.error(error);
      set.status = 500;
      return { error };
    }
  },

  authSuccess: async ({ body, set, jwt }) => {
    try {
      const { alumni_id: userId } = body;
      if (!userId) {
        set.status = 400;
        return { err: "user not found" };
      }

      let user = {};
      let roleId = 1;
      user = await prisma.alumni.findUnique({
        where: {
          alumni_id: userId,
        },
        select: {
          allowedAccount: true,
          alumni_id: true,
        },
      });
      if (!user) {
        user = await prisma.professor.findUnique({
          where: {
            professor_id: userId,
          },
          select: {
            allowedAccount: true,
            professor_id: true,
            univercity_position: true,
          },
        });
        roleId = 2;

        const aj_role = user.univercity_position;
        if (aj_role.includes("รองคณบดี") || aj_role.includes("คณบดี")) {
          roleId = 3;
        }
        if (aj_role.includes("รองอธิการบดี") || aj_role.includes("อธิการบดี")) {
          roleId = 4;
        }
      }

      if (!user.allowedAccount) {
        if (user.alumni_id) {
          const facultyId = Number(userId.substring(3, 5));
          const depId = Number(userId.substring(4, 8));
          const salt = await bcryptjs.genSalt(12);
          const hash = await bcryptjs.hash(userId, salt);
          await prisma.alumni.update({
            where: {
              alumni_id: userId,
            },
            data: {
              allowedAccount: true,
              passwordHash: hash,
              facultyId,
              departmentId: depId,
              year_start: Number(
                `${new Date().getFullYear() + 543}`.substring(0, 2) +
                  `${user.alumni_id}`.substring(0, 2)
              ),
            },
          });
        } else {
          await prisma.professor.update({
            where: {
              professor_id: userId,
            },
            data: {
              allowedAccount: true,
            },
          });
        }

        const hadPrivacy = await prisma.user_privacy.findFirst({
          where: {
            ...(user?.alumni_id
              ? { alumniId: userId }
              : { professorId: userId }),
          },
        });
        if (!hadPrivacy) {
          await prisma.user_privacy.create({
            data: {
              ...(user?.alumni_id
                ? { alumniId: userId }
                : { professorId: userId }),
            },
          });
        }
      }

      const payload = {
        id: user.alumni_id || user?.professor_id,
        signInDate: Date.now(),
        roleId,
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
          fname: true,
          allowedAccount: true,
          alumni_contract: {
            select: {
              email1: true,
              email2: true,
            },
          },
        },
      });
      let isAlumni = true;
      if (!user) {
        user = await prisma.professor.findUnique({
          where: {
            professor_id: username,
          },
          select: {
            email: true,
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

      if (
        isAlumni &&
        !user.alumni_contract.email1 &&
        !user.alumni_contract.email2
      ) {
        return { err: "ไม่พบอีเมล โปรดติดต่อเจ้าหน้าที่ผู้ประสานงาน" };
      }

      const authNum = randomNum();
      const toEmail = isAlumni
        ? user.alumni_contract.email1 || user.alumni_contract.email2
        : user?.email;
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
