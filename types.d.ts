interface User {
    email: string;
    id: string;
    password: string;
    role: string[]
}

interface UserLoginInput {
    email: string
    password: string
}

interface UserSigninInput {
    email: string
    password: string
    confirmPassword: string
}

interface UserWithoutPassword {
    email: string;
    id: string;
    role: string[]
}