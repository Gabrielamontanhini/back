import { deleteLikeInPostDB, getLikesByIdDB, postLikeDB } from "../repositories/likes.repositories.js"

export async function postLike(req, res) {
    const {id_post, id_owner, id_liker}=req.body
    try {
        await postLikeDB(id_post, id_owner, id_liker)
        return res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getLikesById(req, res){
    const {id_post}=req.params
    try{
const likesOfThisPost = await getLikesByIdDB(id_post)
return res.send(likesOfThisPost[0].length).status(200)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteLikeInPost(req, res){
    const {id_post}=req.params
    const {id_liker}=req.body
    try{
await deleteLikeInPostDB(id_post, id_liker)
return res.sendStatus(200)
    }catch (err) {
        res.status(500).send(err.message)
    }
}