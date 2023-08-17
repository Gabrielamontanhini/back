import { Router } from "express";
import userRouter from "./users.routes.js";
import postsRouter from "./posts.routes.js";

const router = Router()
router.use(userRouter)
router.use(postsRouter)

export default router