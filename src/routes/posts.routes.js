import { Router } from "express";
import { deletePostById, editPostById, getPosts, postPost } from "../controllers/posts.controllers.js";


const postsRouter = Router()

postsRouter.get("/posts/get", getPosts)
postsRouter.post("/posts/post", postPost)
postsRouter.patch("/posts/edit/:id", editPostById)
postsRouter.delete("/posts/:id", deletePostById)

export default postsRouter