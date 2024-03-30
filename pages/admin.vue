<template>
    <div class="text-dark text-center">
        <div>
            <h1 class="text-2xl">Admin Page</h1>
            <p>Solo gli admin possono vedere questa pagina!</p>
        </div>
        <div class="flex justify-center">
            <table class="table table-auto">
                <thead>
                    <tr>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody v-for="user in users">
                    <p>{{ user.email }}</p>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    middleware: 'admin-only'
})
const authUser = useAuthUser();

watch(authUser, () => {
  if (!authUser.value) return navigateTo({name: "login"})
  console.log(authUser)
})
const { users } = await $fetch('/api/auth/users')

</script>
