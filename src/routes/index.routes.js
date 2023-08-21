import { Router } from "express";
import userRouter from "./users.routes.js";
import postsRouter from "./posts.routes.js";
import likesRoutes from "./likes.routes.js";
import sessionsRoutes from "./sessions.routes.js";

const router = Router()
router.use(userRouter)
router.use(postsRouter)
router.use(likesRoutes)
//router.use(sessionsRoutes)


export default router