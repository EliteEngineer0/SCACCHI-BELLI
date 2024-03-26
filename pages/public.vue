<template>
    <div class="text-center text-dark">
        <h1>Public</h1>
        <div>
            This page can be accessed by anyone current user:
            <span v-if="authUser"> {{ authUser.email }}</span>
            <span v-else>null</span>
        </div>
    </div>
</template>
<script setup>
const authUser = useAuthUser()

</script>