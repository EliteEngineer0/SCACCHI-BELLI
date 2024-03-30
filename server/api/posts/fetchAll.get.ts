import { getAllPosts } from "~/server/db/posts"

export default defineEventHandler(async (event) => {
    try{
        return {
            posts: await getAllPosts()
        }
    }catch(error: any){ 
        throw new Error(error.message)
    }
})
