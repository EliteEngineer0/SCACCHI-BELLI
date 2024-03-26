export const useAuth = () => {
    const authUser = useAuthUser()
    const isAdmin = useState<boolean>('isAdmin', () => false)
    const setUser = (user: User) => {
        authUser.value = user
    }
    const login = async (user: UserInput) => {
        try {
            const data = await $fetch('/api/user', {
                method: 'POST',
                body: user
            })
            console.log(data)
            if (data.isAdmin) {
                isAdmin.value = true
            } else {
                isAdmin.value = false
            }
            setUser(data.user)
            return data
        } catch (err) {
            return null
        }
    }
    const userLoggedIn = async () => {
        if (!authUser.value) {
            const data: any = await $fetch('/api/user/token', {
                headers: useRequestHeaders(['cookie'])
            })
            setUser(data.user)
            return data
        }
    }
    const logout = async () => {
        const data: any = await $fetch('/api/user/logout')
        isAdmin.value = false
        setUser(data.user)
        return data
    }

    return {
        login,
        userLoggedIn,
        isAdmin,
        logout,
        authUser
    }
}
