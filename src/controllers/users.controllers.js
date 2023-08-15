import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"
import { deleteUserByIdDB, editUserNicknameDB, getAllUsersDB, postUserDB } from "../repositories/user.repositories.js"

export async function postUser(req, res) {
    const { nome, nickname, senha } = req.body
    const hash = bcrypt.hashSync(senha, 10)
    try {
        await postUserDB(req.body, hash)
        return res.sendStatus(201)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAllUsers(req, res){
    try{
const allUsers = await getAllUsersDB()
return res.send(allUsers.rows).status(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function editUserNickname(req, res){
    const { id } = req.params;
    const {nickname} = req.body
    try{
await editUserNicknameDB( nickname, id)
return res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteUserById(req, res){
    const { id } = req.params;
    try{
await deleteUserByIdDB(id)
return res.sendStatus(200)
    }catch (err) {
        res.status(500).send(err.message)
    }
}