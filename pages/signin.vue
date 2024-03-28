<template>
    <FormHolder>
        <FormTitle>Registrati</FormTitle>
        <FormSignin />
    </FormHolder>
</template>
<script setup>
    definePageMeta({
        middleware: 'guest-only'
    })

    const user = useAuthUser()
</script>
