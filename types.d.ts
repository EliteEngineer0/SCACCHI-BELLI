interface User {
    email: string;
    username: string;
    id: string;
    password: string;
    role: string;
}

interface UserLoginInput {
    email: string
    password: string
}

interface UserSigninInput {
    email: string
    username: string;
    password: string
    confirmPassword: string
}

interface UserWithoutPassword {
    email: string;
    username: string;
    id: string;
    role: string;
}