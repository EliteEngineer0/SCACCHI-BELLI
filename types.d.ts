interface User {
    email: string;
    username: string;
    id: string;
    password: string;
    role: string;
}

interface Post{
    id: string
    title: string
    content: string
    authorId: string
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

// Chess

interface GameOptions{
    white: boolean
}

interface Piece{
    position: string
    type: string
}

interface GamePosition{
    pieces: Piece[]
}