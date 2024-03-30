<template>
  <div class="min-h-50 flex flex-col">
    <main class="mx-auto max-w-sm mt-20">
      <form class="mb-8 p-4 lg:p-12 md:p-10 bg-blur rounded-sm">
        <slot />
      </form>

      <div class="mb-4 text-center">
        <NuxtLink to="/" class="btn-stealth py-2">Torna alla Home</NuxtLink>
      </div>
    </main>
  </div>
</template>