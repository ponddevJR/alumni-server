import Elysia from "elysia";
import { authController } from "../controller/auth.controller";
import { middleware } from "../middleware/auth.middleware";
import { rateLimit } from "elysia-rate-limit";

const authRoutes = new Elysia({ prefix: "/auth" })

  // login
  .guard((app) =>
    app
      .use(
        rateLimit({
          duration: 10 * 60 * 1000, // 10 นาที
          max: 5,
          message: "พยายามเข้าสู่ระบบบ่อยเกินไป กรุณาลองใหม่ภายหลัง", // ✅ string
        })
      )
      .post("/login", authController.login)
  )
  // auth otp
  .post("/key-auth", authController.authSuccess)
  // check login
  .get("/check-user", authController.checkLogin, {
    beforeHandle: middleware.auth,
  })
  // logout
  .get("/log-out", authController.logout, { beforeHandle: middleware.auth })
  // forgot password check
  .post("/forgot-pass/checkuser", authController.forgotpass_checkuser)
  // save new pass
  .put("/forgot-pass/newpass", authController.forgotpass_newpass);

export default authRoutes;
