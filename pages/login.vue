<template>
  <FormHolder>
    <FormTitle>Accedi</FormTitle>
    <FormLogin />
  </FormHolder>
</template>
<script setup>
  definePageMeta({
      middleware: 'guest-only'
  })

  const user = useAuthUser()
</script>
