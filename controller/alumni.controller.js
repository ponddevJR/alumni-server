import { PrismaClient } from "../src/generated/prisma";
import bcryptjs from "bcryptjs";
import path from "path";
import { unlink } from "fs/promises";
import { existsSync } from "fs";
import { transporter } from "../config/config";
import { type } from "os";

const prisma = new PrismaClient();

export const alumniController = {
  profile: async ({ store, set }) => {
    try {
      const id = store.user.id;
      if (!id) {
        set.status = 400;
        return;
      }

      const isAlumni = Number(store.user.roleId) < 2;

      // ฟิลด์ที่ใช้ร่วมกัน
      const commonSelect = {
        prefix: true,
        fname: true,
        lname: true,
        facultyId: true,
        departmentId: true,
        profile: true,
      };

      const selectAlumniContract = {
        phone1: true,
        phone2: true,
        email1: true,
        email2: true,
        facebook: true,
        address: true,
        tambon: true,
        amphure: true,
        province: true,
        zipcode: true,
      };

      let user;
      let contract;

      if (isAlumni) {
        user = await prisma.alumni.findUnique({
          where: { alumni_id: id },
          select: {
            ...commonSelect,
            alumni_id: true,
            year_start: true,
            updatedAt: true,
            work_expreriences: {
              take: 1,
              where: { isCurrent: true },
              select: {
                continued_study: true,
                company_place: true,
                job_position: true,
                company_name: true,
                edu_dep: true,
                edu_university: true,
                isCurrent: true,
                edu_level: true,
              },
              orderBy: { createdAt: "desc" },
            },
            alumni_contract: {
              select: {
                phone1: true,
                phone2: true,
                email1: true,
                email2: true,
                facebook: true,
              },
            },
          },
        });
        contract = await prisma.alumni_contract.findUnique({
          where: { alumniId: id },
          select: {
            ...selectAlumniContract,
          },
        });
      } else {
        user = await prisma.professor.findFirst({
          where: { professor_id: id },
          select: {
            ...commonSelect,
            professor_id: true,
            academic_rank: true,
            univercity_position: true,
          },
        });
        contract = await prisma.alumni_contract.findFirst({
          where: { professorProfessor_id: id },
          select: {
            ...selectAlumniContract,
          },
        });
      }

      user = {
        ...user,
        ...contract,
      };

      set.status = 200;
      console.log("🚀 ~ user:", user);
      return { alumni: user };
    } catch (error) {
      console.error(error);
      set.status = 500;
      return { error: "Internal server error" };
    }
  },
  get_contract: async ({ set, store }) => {
    try {
      const { id, roleId } = store.user;
      console.log("🚀 ~ roleId:", roleId);
      if (!id) return (set.status = 400);

      let contract;
      if (Number(roleId) < 2) {
        contract = await prisma.alumni_contract.findUnique({
          where: {
            alumniId: id,
          },
          select: {
            phone1: true,
            phone2: true,
            email1: true,
            email2: true,
            facebook: true,
            address: true,
            tambon: true,
            amphure: true,
            province: true,
            zipcode: true,
          },
        });
      } else {
        contract = await prisma.alumni_contract.findFirst({
          where: {
            professorProfessor_id: id,
          },
          select: {
            phone1: true,
            phone2: true,
            email1: true,
            email2: true,
            facebook: true,
            address: true,
            tambon: true,
            amphure: true,
            province: true,
            zipcode: true,
          },
        });
      }

      set.status = 200;
      return contract;
    } catch (error) {
      console.error(error);
      return (set.status = 500);
    }
  },
  update_contact: async ({ body, store, set }) => {
    try {
      const { id, roleId } = store.user;
      const { phone1, phone2, email1, email2, facebook } = body;

      const isAlumni = roleId < 2;
      const idField = isAlumni ? "alumniId" : "professorProfessor_id";

      const hadContract = await prisma.alumni_contract.findFirst({
        where: { [idField]: id },
      });
      let update;
      let create;
      if (!hadContract) {
        create = await prisma.alumni_contract.create({
          data: {
            [idField]: id,
            phone1,
            phone2,
            email1,
            email2,
            facebook,
          },
        });
      } else {
        update = await prisma.alumni_contract.update({
          where: { [idField]: id },
          data: { phone1, phone2, email1, email2, facebook },
        });
      }

      if (!update && !create) {
        set.status = 400;
        return;
      }

      set.status = 200;
      return { success: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
      return { error: "Internal server error" };
    }
  },
  upload_profile: async ({ body, set, store }) => {
    try {
      const { file } = body;
      const { id, roleId } = store.user;

      if (!file) {
        set.status = 400;
        return { err: "ไม่พบไฟล์รูปภาพ" };
      }

      // Validate file type
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
      ];
      if (!allowedTypes.includes(file.type)) {
        set.status = 400;
        return { err: "รองรับเฉพาะไฟล์ภาพ (JPEG, PNG, WebP, GIF)" };
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        set.status = 400;
        return { err: "ขนาดไฟล์ต้องไม่เกิน 5MB" };
      }

      // กำหนด model และ id field
      const isAlumni = Number(roleId) < 2;
      const model = isAlumni ? "alumni" : "professor";
      const idField = isAlumni ? "alumni_id" : "professor_id";

      // ตรวจสอบว่ามีภาพเก่าไหม
      const hadImage = await prisma[model].findUnique({
        where: { [idField]: id },
        select: { profile: true },
      });

      if (hadImage?.profile) {
        const delPath = path.join(
          import.meta.dir,
          "../public/upload",
          hadImage.profile
        );
        if (existsSync(delPath)) {
          await unlink(delPath);
        }
      }

      // สร้างชื่อไฟล์ใหม่และบันทึก
      const imgName = `${Date.now()}_${file.name?.replace(/\s+/g, "")}`;
      await Bun.write(`./public/upload/${imgName}`, file);

      // อัปเดตฐานข้อมูล
      const update = await prisma[model].update({
        where: { [idField]: id },
        data: { profile: imgName },
      });

      if (!update) {
        set.status = 400;
        return { err: "ไม่สามารถอัปเดตโปรไฟล์ได้" };
      }

      set.status = 200;
      return { ok: true, profile: imgName };
    } catch (error) {
      console.error("Profile upload error:", error);
      set.status = 500;
      return { err: "เกิดข้อผิดพลาดในการอัปโหลด" };
    }
  },
  delete_profile: async ({ store, set }) => {
    try {
      const { id, roleId } = store.user;
      if (!id) {
        set.status = 400;
        return { err: "ไม่พบผู้ใช้" };
      }

      // กำหนด model และ id field
      const isAlumni = Number(roleId) < 2;
      const model = isAlumni ? "alumni" : "professor";
      const idField = isAlumni ? "alumni_id" : "professor_id";

      // ดึงข้อมูลรูปปัจจุบัน
      const profile = await prisma[model].findUnique({
        where: { [idField]: id },
        select: { profile: true },
      });

      if (!profile?.profile) {
        set.status = 400;
        return { err: "ไม่พบรูปภาพของผู้ใช้" };
      }

      // ลบไฟล์ในเครื่อง
      const imgPath = path.join(
        import.meta.dir,
        "../public/upload",
        profile.profile
      );
      if (existsSync(imgPath)) {
        await unlink(imgPath);
      }

      // อัปเดตฐานข้อมูล set profile = null
      await prisma[model].update({
        where: { [idField]: id },
        data: { profile: null },
      });

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error("Delete profile error:", error);
      set.status = 500;
      return { err: "เกิดข้อผิดพลาดในการลบรูป" };
    }
  },
  update_live: async ({ body, store, set }) => {
    try {
      const { id, roleId } = store?.user || {};
      if (!id) {
        set.status = 400;
        return { err: "ไม่พบผู้ใช้" };
      }

      const { address, tambon, amphure, province, zipcode } = body;

      // กำหนด model และ idField (แก้เป็น < 2 ถ้า alumni มีทั้ง role 0 และ 1)
      const isAlumni = Number(roleId) < 2;
      const idField = isAlumni ? "alumniId" : "professorProfessor_id";
      const hadContract = await prisma.alumni_contract.findUnique({
        where: { [idField]: id },
        select: {
          id: true,
        },
      });
      let update;
      let create;
      if (!hadContract.id) {
        create = await prisma.alumni_contract.create({
          data: {
            [idField]: id,
            address,
            tambon,
            amphure,
            province,
            zipcode: String(zipcode),
          },
        });
      } else {
        update = await prisma.alumni_contract.update({
          where: { [idField]: id },
          data: {
            address,
            tambon,
            amphure,
            province,
            zipcode: String(zipcode),
          },
        });
      }

      if (!update && !create) {
        set.status = 400;
        return { err: "ไม่สามารถอัปเดตข้อมูลที่อยู่ได้" };
      }

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error("Update live error:", error);
      set.status = 500;
      return { err: "เกิดข้อผิดพลาดในการอัปเดตที่อยู่" };
    }
  },
  get_privacy: async ({ store, set }) => {
    try {
      const { id, roleId } = store.user || {};
      if (!id) {
        set.status = 400;
        return { err: "ไม่พบผู้ใช้" };
      }

      // map field ตาม role
      const isAlumni = Number(roleId) < 2;
      const idField = isAlumni ? "alumniId" : "professorId";

      const privacy = await prisma.user_privacy.findFirst({
        where: { [idField]: id },
        select: {
          seeProfile: true,
          seeEmail: true,
          seePhone: true,
          seeFacebook: true,
          seeAddress: true,
          seeWorkExprerience: true,
          allowedAlumniSendEmail: true,
          allowedProfessorSendEmail: true,
          seeSalary: true,
        },
      });

      set.status = 200;
      return privacy || {};
    } catch (error) {
      console.error("Get privacy error:", error);
      set.status = 500;
      return { err: "เกิดข้อผิดพลาดในการดึงข้อมูล privacy" };
    }
  },
  update_privacy: async ({ body, store, set }) => {
    try {
      const id = store.user.id;
      if (!id) {
        set.status = 400;
        return { error: "Invalid user" };
      }

      // whitelist ฟิลด์ที่แก้ไขได้
      const allowedFields = [
        "seeProfile",
        "seeEmail",
        "seePhone",
        "seeFacebook",
        "seeAddress",
        "seeWorkExprerience",
        "seeSalary",
        "allowedAlumniSendEmail",
        "allowedProfessorSendEmail",
      ];

      const data = {};
      for (const key of allowedFields) {
        if (key in body) data[key] = body[key];
      }

      if (Object.keys(data).length === 0) {
        set.status = 400;
        return { error: "No valid fields to update" };
      }

      let update;
      if (store.user.roleId < 2) {
        update = await prisma.user_privacy.updateMany({
          where: { alumniId: id },
          data,
        });
      } else {
        update = await prisma.user_privacy.updateMany({
          where: { professorId: id },
          data,
        });
      }

      if (update.count === 0) {
        set.status = 404;
        return { error: "Privacy settings not found" };
      }

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
      return { error: "Internal server error" };
    }
  },
  work_create: async ({ body, store, set }) => {
    try {
      const { salary, ...rest } = body;

      await prisma.work_expreriences.create({
        data: {
          alumniId: store.user.id,
          salary: Number(salary),
          ...rest,
        },
      });

      set.status = 201; // ใช้ 201 สำหรับ create success
      return { ok: true };
    } catch (error) {
      console.error("Error creating work experience:", error);
      set.status = 500;
      return { ok: false, error: "Failed to create work experience" };
    }
  },
  work_list: async ({ set, query, params }) => {
    try {
      const { alumniId: id } = params;
      if (!id) {
        return (set.status = 400);
      }
      const { search, type, page, sort } = query;

      const skip = 10 * (Number(page) - 1);

      const currentJob = Number(type);
      const queryJobType =
        currentJob === 0
          ? null
          : currentJob === 3
          ? {
              continued_study: true,
            }
          : {
              isCurrent: currentJob === 1 ? true : false,
            };

      const [
        workExprerience,
        total,
        workTimes,
        avgSalary,
        currentSalary,
        minSalary,
      ] = await Promise.all([
        prisma.work_expreriences.findMany({
          take: 10,
          skip: skip,
          where: {
            alumniId: id,
            OR: search
              ? [
                  { job_position: { contains: search, mode: "insensitive" } },
                  { company_name: { contains: search, mode: "insensitive" } },
                  {
                    company_place: { contains: search, mode: "insensitive" },
                  },
                  { job_detail: { contains: search, mode: "insensitive" } },
                  {
                    job_responsibility: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  { job_skills: { contains: search, mode: "insensitive" } },
                  {
                    edu_level: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    edu_dep: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    edu_faculty: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    edu_university: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                ]
              : undefined,
            ...queryJobType,
          },
          select: {
            id: true,
            job_position: true,
            company_name: true,
            company_place: true,
            start_date: true,
            isCurrent: true,
            end_date: true,
            job_detail: true,
            salary: true,
            job_responsibility: true,
            job_skills: true,
            remark: true,
            continued_study: true,
            edu_level: true,
            edu_dep: true,
            edu_faculty: true,
            edu_performance: true,
            year_end: true,
            year_start: true,
            edu_university: true,
            isOnTheLine: true,
            isInThai: true,
            alumniId: true,
          },
          orderBy: {
            ...JSON.parse(sort),
          },
        }),
        prisma.work_expreriences.count({
          where: {
            alumniId: id,
            OR: search
              ? [
                  { job_position: { contains: search, mode: "insensitive" } },
                  { company_name: { contains: search, mode: "insensitive" } },
                  {
                    company_place: { contains: search, mode: "insensitive" },
                  },
                  { job_detail: { contains: search, mode: "insensitive" } },
                  {
                    job_responsibility: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  { job_skills: { contains: search, mode: "insensitive" } },
                  {
                    edu_level: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    edu_dep: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    edu_faculty: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    edu_university: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                ]
              : undefined,
            ...queryJobType,
          },
        }),
        prisma.work_expreriences.count({
          where: {
            alumniId: id,
            continued_study: false,
          },
        }),
        prisma.work_expreriences.aggregate({
          where: {
            alumniId: id,
          },
          _avg: {
            salary: true,
          },
          _max: {
            salary: true,
          },
          _min: {
            salary: true,
          },
        }),
        prisma.work_expreriences.aggregate({
          where: {
            alumniId: id,
            continued_study: false,
            isCurrent: true,
          },
          _sum: {
            salary: true,
          },
        }),
        prisma.work_expreriences.aggregate({
          where: {
            alumniId: id,
            continued_study: false,
          },
          _min: {
            salary: true,
          },
        }),
      ]);
      set.status = 200;
      return {
        workExprerience,
        totalPage: Math.ceil(total / 10) < 1 ? 1 : Math.ceil(total / 10),
        dataAvg: {
          workTimes,
          workTimes,
          avgSalary: avgSalary._avg.salary,
          maxSalary: avgSalary._max.salary,
          minSalary: minSalary._min.salary,
          currentSalary: currentSalary._sum.salary,
        },
      };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  delete_work: async ({ params, set }) => {
    try {
      const { id } = params;

      const del = await prisma.work_expreriences.delete({
        where: {
          id: Number(id),
        },
      });
      if (!del) return (set.status = 400);

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  work_update: async ({ body, params, set }) => {
    try {
      const { id } = params;
      if (!id) return (set.status = 400);
      const { salary, ...rest } = body;

      const update = await prisma.work_expreriences.update({
        where: {
          id: Number(id),
        },
        data: {
          alumni: {
            update: {
              updatedAt: new Date(),
            },
          },
          salary: Number(salary),
          ...rest,
          updatedAt: new Date(),
        },
      });
      if (!update) return (set.status = 400);

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  update_password: async ({ body, store, set }) => {
    try {
      const id = store.user.id;
      const role = store.user.roleId;
      const { currentPass, newPass } = body;

      let user;
      if (role < 2) {
        user = await prisma.alumni.findUnique({
          where: {
            alumni_id: id,
          },
          select: {
            passwordHash: true,
          },
        });
      } else {
        user = await prisma.professor.findUnique({
          where: {
            professor_id: id,
          },
          select: {
            passwordHash: true,
          },
        });
      }
      if (!user) set.status = 400;

      const isMatch = await bcryptjs.compare(
        currentPass,
        user.passwordHash || ""
      );
      if (role < 2 && !isMatch) {
        return { err: "รหัสผ่านปัจจุบันไม่ถูกต้อง" };
      }

      const salt = await bcryptjs.genSalt(12);
      const hash = await bcryptjs.hash(newPass, salt);

      let update;
      if (role < 2) {
        update = await prisma.alumni.update({
          where: {
            alumni_id: id,
          },
          data: {
            passwordHash: hash,
          },
        });
      } else {
        update = await prisma.professor.update({
          where: {
            professor_id: id,
          },
          data: {
            passwordHash: hash,
          },
        });
      }

      if (!update) return (set.status = 400);

      set.headers[
        "Set-Cookie"
      ] = `token=; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=0`;

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  alumni_list: async ({ query, set, store }) => {
    try {
      const {
        page,
        fac,
        dep,
        search,
        sort,
        take,
        selectYearStart,
        selectYearEnd,
        role,
      } = query;

      const type = 1;
      const skip = take * (Number(page) - 1);

      const facQuery = fac ? { facultyId: Number(fac) } : {};
      let depIdQuery = dep ? { departmentId: Number(dep) } : {};
      const yearStartQ =
        selectYearStart && type < 2
          ? { year_start: Number(selectYearStart) }
          : {};
      const yearEndQ =
        selectYearEnd && type < 2 ? { year_end: Number(selectYearEnd) } : {};

      // search conditions
      const searchConditions = search
        ? [
            { prefix: { contains: search, mode: "insensitive" } },
            { fname: { contains: search, mode: "insensitive" } },
            { lname: { contains: search, mode: "insensitive" } },
            {
              year_start: {
                equals: Number(search),
              },
            },
            {
              year_end: {
                equals: Number(search),
              },
            },
          ]
        : [];

      if (search && type < 2) {
        searchConditions.push({
          work_expreriences: {
            some: {
              OR: [
                { company_place: { contains: search, mode: "insensitive" } },
                { job_position: { contains: search, mode: "insensitive" } },
              ],
            },
          },
        });
      }

      const searchQuery = search ? { OR: searchConditions } : {};

      // เลือก model และ select ตาม type
      const isAlumni = Number(type) === 1;
      const model = isAlumni ? prisma.alumni : prisma.professor;
      const sorting = isAlumni ? JSON.parse(sort) : {};
      const select = isAlumni
        ? {
            alumni_id: true,
            prefix: true,
            fname: true,
            lname: true,
            facultyId: true,
            departmentId: true,
            updatedAt: true,
            year_start: true,
            year_end: true,
          }
        : {
            professor_id: true,
            prefix: true,
            fname: true,
            lname: true,
            facultyId: true,
            departmentId: true,
            academic_rank: true,
            univercity_position: true,
          };

      // ดึงข้อมูล + count ใน Promise.all
      const [list, count] = await Promise.all([
        model.findMany({
          take: Number(take),
          skip,
          where: {
            ...facQuery,
            ...depIdQuery,
            ...searchQuery,
            ...yearEndQ,
            ...yearStartQ,
          },
          select,
          orderBy: {
            ...sorting,
          },
        }),
        model.count({
          where: {
            ...facQuery,
            ...depIdQuery,
            ...searchQuery,
            ...yearEndQ,
            ...yearStartQ,
          },
        }),
      ]);

      set.status = 200;
      return {
        data: list,
        totalPage: Math.max(1, Math.ceil(count / take)),
        all: count,
      };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },

  get_user_byId: async ({ params, set }) => {
    try {
      const { id, roleId } = params;
      if (!id || !roleId) return (set.status = 400);

      let user;
      if (Number(roleId < 2)) {
        const [data, contract, workTimes, avgSalary, currentSalary] =
          await Promise.all([
            prisma.alumni.findUnique({
              where: {
                alumni_id: id,
              },
              select: {
                year_start: true,
                alumni_id: true,
                prefix: true,
                fname: true,
                lname: true,
                facultyId: true,
                departmentId: true,
                year_end: true,
                updatedAt: true,
                profile: true,
                work_expreriences: {
                  select: {
                    id: true,
                    job_position: true,
                    company_name: true,
                    company_place: true,
                    start_date: true,
                    end_date: true,
                    isCurrent: true,
                    job_detail: true,
                    remark: true,
                    continued_study: true,
                    edu_dep: true,
                    edu_faculty: true,
                    edu_level: true,
                    edu_performance: true,
                    edu_university: true,
                    year_end: true,
                    year_start: true,
                  },
                  orderBy: {
                    isCurrent: "desc",
                  },
                },
                user_privacy: {
                  select: {
                    seeAddress: true,
                    seeEmail: true,
                    seeFacebook: true,
                    seePhone: true,
                    seeWorkExprerience: true,
                    seeProfile: true,
                    seeSalary: true,
                  },
                },
              },
            }),
            prisma.alumni_contract.findUnique({
              where: {
                alumniId: id,
              },
              select: {
                facebook: true,
                email1: true,
                email2: true,
                phone1: true,
                phone2: true,
                address: true,
                province: true,
                tambon: true,
                amphure: true,
                zipcode: true,
              },
            }),
            prisma.work_expreriences.count({
              where: {
                alumniId: id,
                continued_study: false,
              },
            }),
            prisma.work_expreriences.aggregate({
              where: {
                alumniId: id,
                continued_study: false,
              },
              _avg: {
                salary: true,
              },
              _max: {
                salary: true,
              },
              _min: {
                salary: true,
              },
            }),
            prisma.work_expreriences.aggregate({
              where: {
                alumniId: id,
                continued_study: false,
                isCurrent: true,
              },
              _sum: {
                salary: true,
              },
            }),
          ]);

        user = {
          ...data,
          ...contract,
          workTimes,
          avgSalary: avgSalary._avg.salary,
          maxSalary: avgSalary._max.salary,
          minSalary: avgSalary._min.salary,
          currentSalary: currentSalary._sum.salary,
        };
      } else {
        user = await prisma.professor.findUnique({
          where: {
            professor_id: id,
          },
          select: {
            professor_id: true,
            prefix: true,
            fname: true,
            lname: true,
            academic_rank: true,
            univercity_position: true,
            facultyId: true,
            profile: true,
            departmentId: true,
            user_privacy: {
              select: {
                seeAddress: true,
                seeEmail: true,
                seeFacebook: true,
                seePhone: true,
                seeProfile: true,
              },
            },
          },
        });
        const contract = await prisma.alumni_contract.findFirst({
          where: {
            professorProfessor_id: id,
          },
          select: {
            facebook: true,
            email1: true,
            email2: true,
            phone1: true,
            phone2: true,
            address: true,
            province: true,
            tambon: true,
            amphure: true,
            zipcode: true,
          },
        });
        user = {
          ...user,
          ...contract,
        };
      }

      if (!user) return (set.status = 400);

      set.status = 200;
      return user;
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  send_email: async ({ body, set, store }) => {
    try {
      const { id, text, roleId, sendMyContact } = body;
      if (!id || !text || !roleId) return (set.status = 400);

      const senderRole = Number(store.user.roleId);
      let sender;
      if (senderRole < 2) {
        sender = await prisma.alumni.findUnique({
          where: {
            alumni_id: store.user.id,
          },
          select: {
            prefix: true,
            fname: true,
            lname: true,
          },
        });
      } else {
        sender = await prisma.professor.findUnique({
          where: {
            professor_id: store.user.id,
          },
          select: {
            prefix: true,
            fname: true,
            lname: true,
            academic_rank: true,
          },
        });
      }
      console.log(sender);

      let emailTo;
      let toUserPrivacy;
      if (Number(roleId) < 2) {
        emailTo = await prisma.alumni_contract.findUnique({
          where: {
            alumniId: id,
          },
          select: {
            email1: true,
            email2: true,
            phone1: true,
            phone2: true,
            facebook: true,
          },
        });
        toUserPrivacy = await prisma.user_privacy.findUnique({
          where: {
            alumniId: id,
          },
          select: {
            allowedAlumniSendEmail: true,
            allowedProfessorSendEmail: true,
          },
        });
      } else {
        emailTo = await prisma.alumni_contract.findUnique({
          where: {
            professorProfessor_id: id,
          },
          select: {
            email1: true,
            email2: true,
            phone1: true,
            phone2: true,
            facebook: true,
          },
        });
        toUserPrivacy = await prisma.user_privacy.findUnique({
          where: {
            professorId: id,
          },
          select: {
            allowedAlumniSendEmail: true,
            allowedProfessorSendEmail: true,
          },
        });
      }
      if (!emailTo.email1 && !emailTo.email2) {
        return { err: "ไม่พบอีเมลที่สามารถส่งได้" };
      }

      if (
        (senderRole < 2 && !toUserPrivacy?.allowedAlumniSendEmail) ||
        (senderRole >= 2 && !toUserPrivacy.allowedProfessorSendEmail)
      ) {
        return { err: "ผู้ใช้คนนี้ปฏิเสธการรับข้อความจากคุณ" };
      }

      const senderContact = sendMyContact
        ? `โปรดติดต่อกลับทางช่องทางเหล่านี้\nEmail:${
            emailTo.email1 || emailTo.email2
          }\n${emailTo?.phone1 ? `Call : ${emailTo?.phone1}` : ""}${
            emailTo?.phone2 ? `\nCall : ${emailTo?.phone2}` : ""
          }${emailTo?.facebook ? `\nFacebook : ${emailTo?.facebook}` : ""}`
        : null;

      const mailOptions = {
        from: emailTo?.email1 || emailTo?.email2,
        to: emailTo?.email1 || emailTo.email2,
        subject:
          "มีผู้ส่งข้อความหาคุณผ่านระบบสารสนเทศเครือข่ายศิษย์เก่ามหาวิทยาลัยราชภัฏมหาสารคาม",
        text: `ข้อความจาก${type < 2 ? sender.prefix : sender?.academic_rank}${
          sender.fname
        } ${sender.lname} ถึงคุณ${sender.fname} ${
          sender.lname
        }\n"${text}"\n\n${senderContact}`,
      };

      await transporter.sendMail(mailOptions);
      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
};
