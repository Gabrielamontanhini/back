import { editPostByIdDB, getPostsDB, postPostDB } from "../repositories/posts.repositories"




export async function getPosts(req, res){
    try{
const allPosts = await getPostsDB()
return res.status(200).send(allPosts.rows)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postPost(req, res){
    const {id_user, content} = req.body
    try{
await postPostDB(id_user, content)
return res.sendStatus(200)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function editPostById(req, res){
    const {id, newContent} = req.body
    try{
await editPostByIdDB(newContent, id)
return res.sendStatus(200)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deletePostById(req, res){
const { id } = req.body
    try{
await deletePostByIdDB(id)
return res.sendStatus(200)
    }catch (err) {
        res.status(500).send(err.message)
    }
}