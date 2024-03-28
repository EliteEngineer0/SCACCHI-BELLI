import { createUser, getUserByEmail } from "../db/user"
import { verifyPassword } from "../utils/password"

const loginUser = async (user: User) => {
  const checkUser = await getUserByEmail(user.email)
  if (!checkUser) {
    throw new Error("User not found")
  }
  const checkPassword = await verifyPassword(user.password, checkUser.password)
  if (!checkPassword) {
    throw new Error("Password is incorrect")
  }
  return checkUser
}

const signinUser = async (user: User) => {
  const checkUser: any = await getUserByEmail(user.email)
  if (checkUser) {
    console.warn(checkUser)
    throw new Error("User already exists")
  }
  const sanitizedUser: User = {
    email: user.email,
    username: user.username,
    password: user.password,
    role: "user",
  }
  createUser(sanitizedUser)
}

export { loginUser, signinUser }
