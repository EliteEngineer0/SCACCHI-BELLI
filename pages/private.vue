<script lang="ts" setup>
definePageMeta({
  middleware: ["user-only"],
});
const authUser = useAuthUser();
watch(authUser, () => {
  if (!authUser.value) return navigateTo({name: "login"})
  console.log(authUser)
})
</script>
<template>
  <div class="text-dark">
    <p>Private</p>
    <div v-if="authUser">
      <p>
        This page is only visible for user who logged in current user:
      {{ authUser }}
      </p>
    </div>
  </div>
</template>

