import { createUser, getUserByEmail } from "../db/user"
import { verifyPassword } from "../utils/password"

const loginUser = async (user) => {
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

const signinUser = async (user) => {
  const checkUser = getUserByEmail(user.email)
  if (checkUser) {
    throw new Error("User already exists")
  }
  const createUser = createUser(user)
}

export { loginUser, signinUser }
