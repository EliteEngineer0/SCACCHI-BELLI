import type { User } from "@prisma/client";
import { prisma } from ".";
import { hashPassword } from "../utils/password";

export const createUser = async (userData: User) => {
    const finalUserData = {
        ...userData,
        password: await hashPassword(userData.password)
    }

    return prisma.user.create({
        data: finalUserData
    })
}

export const getUserByUsername = (username: string) => {
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}

export const getUserByEmail = (email: string) => {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

export const getUserById = (userId: number) => {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}

export const getUsers = () => {
    return prisma.user.findMany()
}