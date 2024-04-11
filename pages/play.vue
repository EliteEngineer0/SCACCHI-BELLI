<template>
    <div class="flex w-full justify-center">
        <!-- fill props -->
        <ChessBoard :game="game" :position="position" />
        <ChessMoveHistory />
    </div>
</template>

<script lang="ts" setup>

    const { defaultGame,defaultPosition } = await useBoard()

    var game = ref(defaultGame)
    var position = ref(defaultPosition)

    definePageMeta({
        middleware: ["user-only"],
    });
</script>