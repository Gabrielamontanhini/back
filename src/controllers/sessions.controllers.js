import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { getUserByNickname, iniciarSessaoDB } from "../repositories/sessions.repositories.js"


export async function postLogin(req, res){
    const {nickname, senha}=req.body
    try{
        const hash = bcrypt.hashSync(senha, 10)
        const thisUser = await getUserByNickname(nickname)
        let testPassword = thisUser.rows[0].senha
        const isCorrect = await bcrypt.compare(hash,testPassword)
        return res.status(200).send(testPassword + hash)
    }
    catch (err) {
        return res.status(500).send(err)
    }
}



{/** try{
        const thisUser = await getUserByNickname(nickname)
        if (thisUser.rowCount == 0) return res.send({ message: "Não encontramos esse usuario!" })
        }
        catch (err) {
        return res.status(500).send("Primeiro catch " + err)
        }
    try{
        const hash = bcrypt.hashSync(senha, 10)
        let testPassword = thisUser.rows[0].senha
        const isCorrect = bcrypt.compare(hash,testPassword)
        if (!isCorrect) return res.status(401).send({ message: "Senha incorreta!" })
        const token = uuid()
        await iniciarSessaoDB(thisUser.rows[0].id, token)
        return res.status(201).send(token)
    }
    catch (err) {
        return res.status(500).send(`erro ${thisUser.rows[0].senha} ` + err)
    } */}


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