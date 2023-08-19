import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { getUserByNickname } from "../repositories/sessions.repositories.js"


export async function postLogin(req, res){
    const {nickname, senha}=req.body
    
    try{
        const thisUser = await getUserByNickname(nickname)
        const hash = bcrypt.hashSync(senha, 10)
        const correctPassword = bcrypt.compare(hash, thisUser[0].senha)
        if (!correctPassword) return res.status(401).send({ message: "Senha incorreta!" })
        const token = uuid()
        await iniciarSessaoDB(thisUser.id, token)
        return res.status(201).send(token)
    }
    catch (err) {
        res.status(500).send(err.message)
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