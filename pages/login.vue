<template>
  <FormHolder>
    <h1 class="text-center mb-4 text-xl font-bold">Esegui il Login</h1>
    <FormLogin />
  </FormHolder>
  <LoginCredentials />
</template>
<script setup>
definePageMeta({
    middleware: 'guest-only'
})

const user = useAuthUser()

</script>
