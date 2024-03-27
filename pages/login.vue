<template>
  <FormHolder>
    <FormTitle>Esegui il Login</FormTitle>
    <FormLogin />
  </FormHolder>
</template>
<script setup>
  definePageMeta({
      middleware: 'guest-only'
  })

  const user = useAuthUser()
</script>
