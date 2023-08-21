import bcrypt from "bcrypt"
import { deleteUserByIdDB, editUserImageDB, editUserNicknameDB, getAllUsersDB, postImageToUserDB, postUserDB } from "../repositories/user.repositories.js"

export async function postUser(req, res) {
    const { nome, nickname, senha } = req.body
   // const hash = bcrypt.hashSync(senha, 0)
    try {
        await postUserDB(req.body, senha)
        return res.sendStatus(201)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postImageToUser(req, res){
    const { id } = req.params;
    const {image} = req.body
    try{
await postImageToUserDB(image, id)
return res.sendStatus(200)
    }catch (err) {
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

export async function editUserImage(req, res){
    const { id } = req.params;
    const {image}=req.body
    try{
        await editUserImageDB( image, id)
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