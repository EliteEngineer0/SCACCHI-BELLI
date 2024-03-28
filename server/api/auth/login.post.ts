import { loginUser } from "~/server/services/auth"

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event)
        const user = await loginUser(body)
        const token = await createToken(user)
        const isAdmin = user.role === "admin"
        setCookie(event, "__session", token)
        
        // Let the client know what user they logged in as
        return {
            user,
            token,
            isAdmin
        }
    }catch(error: any){ 
        throw new Error(error.message)
    }
})
