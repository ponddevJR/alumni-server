import Elysia from "elysia";
import { presidentController } from "../controller/president.controller";
import { middleware } from "../middleware/auth.middleware";

export const presidentRoutes = new Elysia({ prefix: "/president" })
  .get("/alumni-list", presidentController.alumni_list, {
    beforeHandle: middleware.auth,
  })

  // create news
  .post("/create-news", presidentController.create_news, {
    beforeHandle: middleware.auth,
  })
  // get many news
  .get("/get-news-donate", presidentController.get_news_donate, {
    beforeHandle: middleware.auth,
  })
  // delete news
  .delete("/delete-news/:id", presidentController.delete_news, {
    beforeHandle: middleware.auth,
  })
  // get by Id
  .get("/get-news/:id", presidentController.get_news_byId, {
    beforeHandle: middleware.auth,
  })
  //   update
  .post("/update-news/:id", presidentController.update_news, {
    beforeHandle: middleware.auth,
  })
  //   get avg
  .get("/all-avg-news", presidentController.get_all_avg, {
    beforeHandle: middleware.auth,
  })
  // update view
  .put("/update-news-view/:id", presidentController.update_view, {
    beforeHandle: middleware.auth,
  })
  // get other
  .get("/get-other-news/:category/:id", presidentController.get_other__news, {
    beforeHandle: middleware.auth,
  })
  // send email
  .post("/sendemail", presidentController.send_email, {
    beforeHandle: middleware.auth,
  });
