import { loginUser } from "~/server/services/auth"

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event)
        const user = await loginUser(body)
        const token = await createToken(user)
        const isAdmin = user.role === "admin"
        setCookie(event, "__session", token)
        
        return {
            user,
            token,
            isAdmin
        }
    }catch(err){
        throw new Error(err)
    }
})
