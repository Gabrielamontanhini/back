import { Router } from "express";
import userRouter from "./users.routes.js";
import postsRouter from "./posts.routes.js";
import likesRoutes from "./likes.routes.js";

const router = Router()
router.use(userRouter)
router.use(postsRouter)
router.use(likesRoutes)

export default router