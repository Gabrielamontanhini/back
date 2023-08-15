import { Router } from "express";
import { deleteUserById, editUserImage, editUserNickname, getAllUsers, postImageToUser, postUser } from "../controllers/users.controllers.js";

const userRouter = Router()

userRouter.post("/users/post", postUser)
userRouter.post("/user/post/image/:id", postImageToUser)
userRouter.get("/users/get", getAllUsers)
userRouter.patch("/users/edit/nickname/:id", editUserNickname)
userRouter.patch("/users/edit/image/:id", editUserImage)
userRouter.delete("/users/delete/:id", deleteUserById)

export default userRouter