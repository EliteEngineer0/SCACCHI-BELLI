import { getUsers } from "~/server/db/user"

export default defineEventHandler(async (event) => {
    const user = await getUsers()
    return {
        users: user
    }
})
