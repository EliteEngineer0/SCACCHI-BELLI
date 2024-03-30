import { getUsers } from "~/server/db/users"

export default defineEventHandler(async (event) => {
    const user = await getUsers()
    return {
        users: user
    }
})
