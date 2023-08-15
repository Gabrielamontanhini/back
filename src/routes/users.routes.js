import { Router } from "express";
import { deleteUserById, editUserNickname, getAllUsers, postUser } from "../controllers/users.controllers.js";

const userRouter = Router()

userRouter.post("/users/post", postUser)
userRouter.get("/users/get", getAllUsers)
userRouter.patch("/users/edit/nickname/:id", editUserNickname)
userRouter.delete("/users/delete/:id", deleteUserById)

export default userRouter