<template>
    <FormHolder>
        <h1 class="text-center mb-4 text-xl font-bold">Esegui la registrazione</h1>
        <FormSignin />
    </FormHolder>
</template>
<script setup>
    definePageMeta({
        middleware: 'guest-only'
    })

    const user = useAuthUser()
</script>
