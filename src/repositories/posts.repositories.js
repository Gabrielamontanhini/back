import { db } from "../database/database.connection"


export async function getPostsDB(){
const result = await db.query(`SELECT u.nickname, p.content, p.id, p.id_user
FROM users u
INNER JOIN posts p ON u.id = p.id_user;`)
return result
}

export async function postPostDB(id_user, content){
const result = await db.query(`INSERT INTO posts 
(id_user, content) VALUES ($1, $2);`, [id_user, content])
return result
}

export async function editPostByIdDB(newContent, id){
    const result = await db.query(`UPDATE posts
    SET content = $1
    WHERE id = $2;`, [newContent, id])
    return result
}

export async function deletePostByIdDB(id){
    const result = await db.query(`DELETE FROM posts
    WHERE id = $1;`, [id])
    return result
}