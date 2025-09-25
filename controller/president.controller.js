import { PrismaClient } from "../src/generated/prisma";
import path from "path";
import { unlink } from "fs/promises";
import { existsSync } from "fs";
import { envConfig, transporter } from "../config/config";
const prisma = new PrismaClient();

export const presidentController = {
  alumni_list: async ({ set, query }) => {
    try {
      const { page, facultyId, departmentId, take, search, sort, current } =
        query;
      const skip = take * (page - 1);

      let filter = {};

      if (facultyId) {
        filter = { facultyId: Number(facultyId) };
      }
      if (departmentId) {
        filter = { departmentId: Number(departmentId) };
      }
      if (search) {
        filter = {
          ...filter,
          OR: [
            {
              prefix: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              fname: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              lname: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              year_start: {
                equals: Number(search),
              },
            },
          ],
        };
      }
      let work = {};
      if (current) {
        work = JSON.parse(current);
        filter = {
          ...filter,
          work_expreriences: {
            ...work,
          },
        };
      }

      const [result, total] = await Promise.all([
        prisma.alumni.findMany({
          skip,
          take: Number(take),
          where: {
            ...filter,
          },
          select: {
            alumni_id: true,
            year_start: true,
            year_end: true,
            prefix: true,
            fname: true,
            lname: true,
            facultyId: true,
            departmentId: true,
            work_expreriences: {
              select: {
                isCurrent: true,
                continued_study: false,
              },
            },
          },
          orderBy: {
            ...JSON.parse(sort),
          },
        }),
        prisma.alumni.count({
          where: {
            ...filter,
          },
        }),
      ]);

      set.status = 200;
      return {
        result,
        totalPage: Math.ceil(total / take) < 1 ? 1 : Math.ceil(total / take),
        total,
      };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  create_news: async ({ body, set }) => {
    try {
      const {
        thumnail,
        isPublish,
        target_money,
        current_money,
        donate_end,
        ...rest
      } = body;
      if (!thumnail) {
        return (set.status = 400);
      }
      // save image
      const imgName = Date.now() + "_" + thumnail.name?.split(" ").join("");

      const create = await prisma.news_donatios.create({
        data: {
          target_money:
            target_money == "undefined" ? null : Number(target_money),
          current_money:
            current_money == "undefined" ? null : Number(current_money),
          donate_end: donate_end == "undefined" ? null : donate_end,
          ...rest,
          thumnail: imgName,
          date: String(new Date().getDate()),
          month: String(new Date().getMonth() + 1),
          year: String(new Date().getFullYear() + 543),
          view: 0,
          isPublish: JSON.parse(isPublish),
        },
      });
      if (!create) {
        return (set.status = 400);
      }
      Bun.write("./public/upload/" + imgName, thumnail);

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  get_news_donate: async ({ set, query, store }) => {
    try {
      const { roleId } = store.user;
      const {
        page,
        take,
        sort,
        searchType,
        searchDate,
        searchMonth,
        searchCategory,
      } = query;
      const skip = Number(take) * (page - 1);

      let filter = {};
      if (searchType == 1) {
        filter = {
          category: "0",
        };
      } else if (searchType == 2) {
        filter = {
          category: "1",
        };
      }
      if (roleId < 5) {
        filter = {
          ...filter,
          isPublish: true,
        };
      }
      if (searchCategory == 1) {
        filter = {
          ...filter,
          isPublish: true,
        };
      } else if (searchCategory == 2) {
        filter = {
          ...filter,
          isPublish: false,
        };
      }
      if (searchDate) {
        filter = {
          ...filter,
          date: `${searchDate}`,
        };
      }
      if (searchMonth) {
        filter = {
          ...filter,
          month: `${searchMonth}`,
        };
      }

      const [result, total] = await Promise.all([
        prisma.news_donatios.findMany({
          skip,
          take: Number(take),
          where: {
            ...filter,
          },
          select: {
            id: true,
            thumnail: true,
            createdAt: true,
            updatedAt: true,
            title: true,
            short_detail: true,
            view: true,
            category: true,
            target_money: true,
            current_money: true,
            donate_end: true,
            isPublish: true,
          },
          orderBy: {
            ...JSON.parse(sort),
          },
        }),
        prisma.news_donatios.count({
          where: {
            ...filter,
          },
        }),
      ]);

      set.status = 200;
      return {
        result,
        totalPage: Math.ceil(total / take) < 1 ? 1 : Math.ceil(total / take),
        total,
      };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  delete_news: async ({ params, set }) => {
    try {
      const { id } = params;

      const deleteThumNail = await prisma.news_donatios.findFirst({
        where: {
          id: Number(id),
        },
        select: {
          thumnail: true,
        },
      });
      if (deleteThumNail) {
        const delPath = path.join(
          import.meta.dir,
          "../public/upload",
          deleteThumNail.thumnail
        );
        if (!existsSync(delPath)) {
          return { err: "ไม่พบไฟล์ที่ต้องการแก้ไข" };
        }

        await unlink(delPath);
      }

      const del = await prisma.news_donatios.delete({
        where: {
          id: Number(id),
        },
      });
      if (!del) {
        return (set.status = 400);
      }

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  get_news_byId: async ({ params, set }) => {
    try {
      const { id } = params;
      if (!id) {
        console.log(id);
        return (set.status = 400);
      }

      const data = await prisma.news_donatios.findUnique({
        where: {
          id: Number(id),
        },
        select: {
          title: true,
          thumnail: true,
          isPublish: true,
          short_detail: true,
          detail: true,
          target_money: true,
          category: true,
          current_money: true,
          donate_end: true,
          createdAt: true,
          view: true,
        },
      });

      set.status = 200;
      return data;
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  update_news: async ({ body, set, params }) => {
    try {
      const {
        thumnail,
        isPublish,
        target_money,
        current_money,
        donate_end,
        ...rest
      } = body;
      const { id } = params;
      if (!id) {
        return (set.status = 400);
      }

      const oldImage = await prisma.news_donatios.findUnique({
        where: {
          id: Number(id),
        },
        select: {
          thumnail: true,
        },
      });
      let updateImage = "";
      if (thumnail !== "null") {
        // delete oldimage
        const delPath = path.join(
          import.meta.dir,
          "../public/upload",
          oldImage.thumnail
        );
        if (!existsSync(delPath)) {
          return { err: "ไม่พบไฟล์ที่ต้องการแก้ไข" };
        }

        await unlink(delPath);

        updateImage = Date.now() + "_" + thumnail.name?.split(" ").join("");
        Bun.write("./public/upload/" + updateImage, thumnail);
      }

      const update = await prisma.news_donatios.update({
        where: {
          id: Number(id),
        },
        data: {
          updatedAt: new Date(),
          target_money:
            target_money == "undefined" ? null : Number(target_money),
          current_money:
            current_money == "undefined" ? null : Number(current_money),
          donate_end: donate_end == "undefined" ? null : donate_end,
          ...rest,
          thumnail: thumnail !== "null" ? updateImage : oldImage.thumnail,
          date: String(new Date().getDate()),
          month: String(new Date().getMonth() + 1),
          year: String(new Date().getFullYear() + 543),
          view: 0,
          isPublish: JSON.parse(isPublish),
        },
      });

      if (!update) {
        return (set.status = 400);
      }

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  get_all_avg: async ({ set }) => {
    try {
      const [allNews, allDonation, allViews] = await Promise.all([
        prisma.news_donatios.count({
          where: {
            category: "0",
          },
        }),
        prisma.news_donatios.count({
          where: {
            category: "1",
          },
        }),
        prisma.news_donatios.aggregate({
          _max: {
            view: true,
          },
        }),
      ]);

      set.status = 200;
      return {
        allNews,
        allDonation,
        allViews: allViews._max.view,
      };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  update_view: async ({ params, set }) => {
    try {
      const { id } = params;
      if (!id) {
        return (set.status = 400);
      }

      const oldView = await prisma.news_donatios.findUnique({
        where: {
          id: Number(id),
        },
        select: {
          view: true,
        },
      });

      const update = await prisma.news_donatios.update({
        where: {
          id: Number(id),
        },
        data: {
          view: oldView.view + 1,
        },
      });
      if (!update) {
        return (set.status = 400);
      }

      set.status = 200;
      return { ok: true };
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  get_other__news: async ({ set, params }) => {
    try {
      const { category, id } = params;

      const result = await prisma.news_donatios.findMany({
        take: 5,
        where: {
          category: `${category}`,
          id: {
            not: Number(id),
          },
          isPublish: true,
        },
        select: {
          id: true,
          title: true,
          view: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      set.status = 200;
      return result;
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
  send_email: async ({ body, set, query }) => {
    try {
      const { title, detail } = body;
      if (!title || !detail) {
        return (set.status = 400);
      }
      const { fac, dep, selectYearStart, selectYearEnd } = query;
      let filter = null;
      if (fac) {
        filter = {
          facultyId: Number(fac),
        };
      }
      if (dep) {
        filter = {
          ...filter,
          departmentId: Number(dep),
        };
      }
      if (selectYearStart) {
        filter = {
          ...filter,
          year_start: selectYearStart,
        };
      }
      if (selectYearEnd) {
        filter = {
          ...filter,
          year_end: selectYearEnd,
        };
      }

      const alumniEmails = await prisma.alumni.findMany({
        where: {
          ...filter,
        },
        select: {
          email1: true,
          email2: true,
        },
      });
      if (alumniEmails) {
        set.status = 200;

        alumniEmails.forEach(async (a) => {
          const toEmail = a?.email1 || a?.email2;
          const mailOptions = {
            from: envConfig.mail_user,
            to: toEmail,
            subject:
              "คุณได้รับข้อความจากระบบศิษย์เก่ามหาวิทยาลัยราชภัฏมหาสารคาม",
            html: `<h1>${title}</h1>${detail}`,
          };

          await transporter.sendMail(mailOptions);
        });
      }
    } catch (error) {
      console.error(error);
      set.status = 500;
    }
  },
};
