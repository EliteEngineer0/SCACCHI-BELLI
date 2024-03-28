export default defineEventHandler((event) => {
    // Clear session cookie
    deleteCookie(event, '__session')
    
    // The client needs to know the user is null
    return {
        user: null
    }
})