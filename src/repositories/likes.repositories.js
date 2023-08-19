import { db } from "../database/database.connection.js";

export async function postLikeDB(id_post, id_owner, id_liker){
    const result = await db.query(`INSERT INTO likes_posts 
    (id_post, id_owner, id_liker) VALUES
    ($1, $2, $3);`, [id_post, id_owner, id_liker])
        return result
}

export async function getLikesByIdDB(id_post){
    const result = await db.query(`SELECT * FROM likes_posts`)
    return result
}

export async function getAllLikesDB(){
    const result = await db.query(`SELECT lp.*, u_liker.nickname AS liker_nickname, u_owner.nickname AS owner_nickname
    FROM likes_posts AS lp
    JOIN users AS u_liker ON lp.id_liker = u_liker.id
    JOIN users AS u_owner ON lp.id_owner = u_owner.id;
    `)
    return result
}

export async function deleteLikeInPostDB(id_post, id_liker){
    const result = await db.query(`DELETE FROM 
    likes_posts WHERE 
    id_post = $1 AND id_liker = $2;`, [id_post, id_liker])
}

export async function deleteThisLikeDB(id){
    const result = await db.query(`DELETE FROM likes_posts WHERE id=$1;`, [id])
    return result
}