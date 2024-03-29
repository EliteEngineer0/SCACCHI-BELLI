export const useAuth = () => {
    const authUser = useAuthUser()
    const isAdmin = useState<boolean>('isAdmin', () => false)
    const setUser = (user: User) => {
        authUser.value = user
    }
    const login = async (user: UserLoginInput) => {
        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body: user
        })
        //console.log(data)
        if (data.isAdmin) {
            isAdmin.value = true
        } else {
            isAdmin.value = false
        }
        setUser(data.user)

        return {data: data}
    }

    const signin = async (user: UserSigninInput) => {
        await $fetch('/api/auth/signin', {
            method: 'POST',
            body: user
        })
    }

    const userLoggedIn = async () => {
        if (!authUser.value) {
            const data: any = await $fetch('/api/auth/token', {
                headers: useRequestHeaders(['cookie'])
            })
            setUser(data.user)
            return data
        }
    }
    const logout = async () => {
        const data: any = await $fetch('/api/auth/logout')
        isAdmin.value = false
        setUser(data.user)
        return data
    }

    return {
        login,
        signin,
        logout,
        userLoggedIn,
        isAdmin,
        authUser
    }
}
