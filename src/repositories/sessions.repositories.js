import { db } from "../database/database.connection.js";

export async function getUserByNickname(nickname){
    const result = await db.query(`SELECT users.senha, users.id FROM users WHERE users.nickname=$1;`, [nickname])
    return result
}

export async function iniciarSessaoDB(id, token){
    const result = await db.query(`INSERT INTO sessions (id_user, token)
    VALUES ($1, $2);`, [id, token])
    return result
}

export async function getSessionsDB(){
    const result = await db.query(`SELECT * FROM sessions;`)
    return result
}

export async function deleteSessionByToken(token){
    const result = await db.query(`DELETE FROM session WHERE token=$1;`, [token])
}

//testes

export async function logOut(id){
    const result = await db.query(`DELETE FROM sessions WHERE id_user=$1;`, [id])
    return result
}