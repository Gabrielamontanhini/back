import { Router } from "express";
import { getSessions, logOut, postLogin } from "../controllers/sessions.controllers.js";

const sessionsRouter = Router()

sessionsRouter.post("/login", postLogin)
sessionsRouter.get("/sessions", getSessions)
sessionsRouter.delete("/logout", logOut)


export default sessionsRouter