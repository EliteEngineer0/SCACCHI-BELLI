import bcrypt from "bcryptjs"

export const verifyPassword = async (password, hash) => {
    const compare = await bcrypt.compare(password, hash)
    if (!compare) {
        throw new Error('Password does not match')
    }
    return compare
}

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
} 