import { Router } from "express";
import { deleteLikeInPost, deleteThisLike, getAllLikes, getLikesById, postLike } from "../controllers/likes.controllers.js";

const likesRoutes = Router()

likesRoutes.post("/like/post", postLike)
likesRoutes.get("/like/:id", getLikesById)
likesRoutes.get("/likes", getAllLikes)
likesRoutes.delete("/like/:id", deleteLikeInPost)
likesRoutes.delete("/dislike/delete", deleteThisLike)

export default likesRoutes