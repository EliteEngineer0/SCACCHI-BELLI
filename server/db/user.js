import { prisma } from ".";
import { hashPassword } from "../utils/password";

export const createUser = async (userData) => {
    const finalUserData = {
        ...userData,
        password: await hashPassword(userData.password)
    }

    return prisma.user.create({
        data: finalUserData
    })
}

export const getUserByUsername = (username) => {
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}

export const getUserByEmail = (email) => {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

export const getUserById = (userId) => {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}

export const getUsers = () => {
    return prisma.user.findMany()
}