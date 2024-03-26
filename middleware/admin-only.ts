export default defineNuxtRouteMiddleware(async (_to, from) => {
    const { isAdmin  } = useAuth()
    if (!isAdmin.value) {
        return navigateTo({name: "login"})
    }
})
