import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { getSessionsDB, getUserByNickname, iniciarSessaoDB } from "../repositories/sessions.repositories.js"


export async function postLogin(req, res){
    const {nickname, senha}=req.body
    try{
     //   const hash = bcrypt.hashSync(senha, 0)
        const thisUser = await getUserByNickname(nickname)
        let testPassword = thisUser.rows[0].senha
        
        if (senha === testPassword){
            const token = uuid()
            await iniciarSessaoDB(thisUser.rows[0].id, token)
        return res.status(201).send(token)
        } else {
            return res.status(200).send(`${senha === testPassword} deve dar false ne`)
        }
        
    }
    catch (err) {
        return res.status(500).send(err)
    }
}

export async function getSessions(req, res){
    try{
        const sessionsNow = await getSessionsDB()
        return res.status(200).send(sessionsNow.rows)
    }
    catch (err) {
        return res.status(501).send(err + "catchcontroller")
    }
}


export async function logOut(req, res){
    const {token} = req.headers
    try{
await deleteSessionByToken(token)
return res.sendStatus(200)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}