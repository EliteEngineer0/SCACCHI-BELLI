<template >
    <div class="text-dark text-center">
      <div>
        <h1 class="text-2xl">Forum</h1>
        <p class="mt-4">Guarda i post.</p>
      </div>

      <table class="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody id="example-1">
          <tr v-for="post in posts" :key="post.id">
            <td><a>{{ post.id }}</a></td>
            <td>{{ post.content }}</td> 
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    middleware: ["user-only"],
  });

  const { posts } = await $fetch('/api/posts/fetchAll')
</script>
  