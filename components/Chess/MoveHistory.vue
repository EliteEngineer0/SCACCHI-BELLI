<template>
    <div class="bg-blur h-full rounded">
        <table>
            <thead>
                <tr>
                    <th>White</th>
                    <th>Black</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="move in moves">
                    <td>{{ move }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        moves: string[]
    }>()
</script>