import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { getUserByNickname, iniciarSessaoDB } from "../repositories/sessions.repositories.js"


export async function postLogin(req, res){
    const {nickname, senha}=req.body
    const thisUser = await getUserByNickname(nickname)
    if (thisUser.rowCount == 0) return res.send({ message: "Não encontramos esse usuario!" })
    try{
        const hash = bcrypt.hashSync(senha, 10)
        const correctPassword = bcrypt.compare(hash, thisUser.rows[0].senha)
        if (!correctPassword) return res.status(401).send({ message: "Senha incorreta!" })
        const token = uuid()
        await iniciarSessaoDB(thisUser.rows[0].id, token)
        return res.status(201).send(token)
    }
    catch (err) {
        return res.status(500).send(nickname)
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