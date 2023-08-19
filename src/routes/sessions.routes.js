import { Router } from "express";
import { logOut, postLogin } from "../controllers/sessions.controllers.js";

const sessionsRouter = Router()

sessionsRouter.post("/login", postLogin)
sessionsRouter.delete("/logout", logOut)


export default sessionsRouter()