import { db } from "../database/database.connection.js"

export async function postUserDB(body, hash){
    const {nome, nickname} = body
    const result = await db.query(`INSERT INTO users 
    (nome, nickname, senha)
    VALUES ($1, $2, $3);`,
    [nome, nickname, hash])
    return result
}

export async function getAllUsersDB(){
    const result = await db.query(`SELECT id, nome, nickname FROM users;`)
    return result
}

export async function editUserNicknameDB(nickname, id){
    const result = await db.query(`UPDATE users 
    SET nickname = $1 WHERE id=$2;`,[nickname, id])
    return result
}

export async function deleteUserByIdDB(id){
    const result = await db.query(`DELETE FROM users
    WHERE id = $1;`, [id])
    return result
}