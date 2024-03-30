import { createUser, getUserByEmail, getUserByUsername } from "../db/users"
import { verifyPassword } from "../utils/password"

const loginUser = async (user: User) => {
  const checkUser = await getUserByEmail(user.email)
  if (!checkUser) {
    throw new Error("Utente non trovato.")
  }
  const checkPassword = await verifyPassword(user.password, checkUser.password)
  if (!checkPassword) {
    throw new Error("Password sbagliata.")
  }
  return checkUser  
}

const signinUser = async (user: UserSigninInput) => {
  const checkUserWithEmail: any = await getUserByEmail(user.email)
  if (checkUserWithEmail) {
    console.warn(checkUserWithEmail)
    throw new Error("Email già in uso.")
  }

  const checkUserWithUsername: any = await getUserByUsername(user.username)
  if (checkUserWithUsername) {
    console.warn(checkUserWithUsername)
    throw new Error("Username già in uso.")
  }

  if (user.password !== user.confirmPassword) {
    throw new Error("Le password non coincidono.")
  }
  const sanitizedUser: any = {
    email: user.email,
    username: user.username,
    password: user.password,
    role: "user",
  }
  createUser(sanitizedUser)
}

export { loginUser, signinUser }
