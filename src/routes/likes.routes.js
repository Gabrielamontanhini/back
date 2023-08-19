import { Router } from "express";
import { deleteLikeInPost, deleteThisLike, getLikesById, postLike } from "../controllers/likes.controllers.js";

const likesRoutes = Router()

likesRoutes.post("/like/post", postLike)
likesRoutes.get("/like/:id", getLikesById)
likesRoutes.delete("/like/:id", deleteLikeInPost)
likesRoutes.delete("/like/delete", deleteThisLike)

export default likesRoutes