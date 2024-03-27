<template>
  <div class="min-h-screen flex flex-col">
    <main class="mx-auto max-w-sm w-full my-20">
      <form class="mb-4 p-12 bg-blur rounded-sm">
        <slot />
      </form>

      <div class="mb-4 text-center">
        <NuxtLink to="/" class="btn-stealth py-2">Go back home</NuxtLink>
      </div>
    </main>
  </div>
</template>