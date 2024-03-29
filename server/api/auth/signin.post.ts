import { loginUser, signinUser } from "~/server/services/auth"

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event)
        await signinUser(body)
        
        return {}
    }catch(error: any){ 
        throw new Error(error.message)
    }
})
