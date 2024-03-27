<template>
    <NuxtLayout>
        <!-- typeof error.statusCode: -->
        <!-- string from server-side -->
        <!-- number on client-side -->
        <!-- typeof error.statusCode =
        <span v-html="`${typeof error.statusCode}`"> </span>
        <hr /> -->
    
        <div class="w-full mt-20 p-4 rounded-lg">
            <h3 class="text-8xl text-red-500 font-bold text-center">
                Errore: {{ error.statusCode }}
            </h3>
            <h2 class="text-3xl text-red-500 text-center my-4">
                {{ error.message }}
            </h2>
        </div>
    
        <!-- customise 404 message from template section -->
        <!-- <h3>Custom 404 message</h3>
        <p v-if="error.statusCode === 404 || '404'">
        [template]: Oops page not available 🥺
        </p> -->
    
        <!-- Redirect to home page -->
        <!-- <button @click="handleError">Clear errors</button> -->
    </NuxtLayout>
</template>
  
<script setup>
    // default props available on error.vue
    const props = defineProps({
    error: Object,
    });

    // customise 404 message from script section
    const error = useError();
    if (error.value.statusCode === 404 || '404') {
    error.value.message = 'Oops! Pagina non trovata 😔';
    }

    // clear error and redirect to home page
    const handleError = () => clearError({ redirect: '/' });
</script>
  