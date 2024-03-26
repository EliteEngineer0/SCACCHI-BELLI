<script lang="ts" setup>
    defineProps<{ title: string }>();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <h1 class="my-10 mt-20 font-bold text-2xl text-center text-dark">{{ title }}</h1>

    <main class="mx-auto max-w-sm w-full">
      <form class="mb-4 p-12 bg-blur rounded-sm">
        <slot />
      </form>

      <div class="mb-4 text-center">
        <NuxtLink to="/" class="btn-stealth py-2">Go back home</NuxtLink>
      </div>
    </main>
  </div>
</template>