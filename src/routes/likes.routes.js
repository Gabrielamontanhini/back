import { Router } from "express";
import { deleteLikeInPost, getLikesById, postLike } from "../controllers/likes.controllers.js";

const likesRoutes = Router()

likesRoutes.post("/like/:id", postLike)
likesRoutes.get("/like/:id", getLikesById)
likesRoutes.delete("/like/:id", deleteLikeInPost)