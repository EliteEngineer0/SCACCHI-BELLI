<script lang="ts" setup>
  definePageMeta({
    middleware: ["user-only"],
  });
  const authUser: any = useAuthUser();
  watch(authUser, () => {
    if (!authUser.value) return navigateTo({name: "login"})
    console.log(authUser)
  })
</script>
<template>
  <div class="text-dark text-center">
    <h1 class="text-2xl">Ciao {{ authUser.username }}!</h1>
    <div v-if="authUser" class="mt-4">
      <p>
        Email: <b>{{ authUser.email }}</b>
      </p>
      <p>
        Role: <b>{{ authUser.role }}</b> 
      </p>
    </div>
  </div>
</template>

