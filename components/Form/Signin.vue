<template>
    <form @submit.prevent="onSigninClick">
      <FormError v-if="form.error">
        {{ form.error }}
      </FormError>
      <div class="mb-1">
        <label for="email" class="mb-1 inline-block font-semibold text-sm text-slate-200">Email</label>
        <input id="email" v-model="form.data.email" type="email" class="input px-3 py-1.5 w-full" required />
      </div>
      <div class="mb-4">
        <label for="username" class="mb-1 inline-block font-semibold text-sm text-slate-200">Username</label>
        <input id="username" v-model="form.data.username" type="username" class="input px-3 py-1.5 w-full" required />
      </div>
      <div class="mb-1">
        <label for="password" class="mb-1 inline-block font-semibold text-sm text-slate-200">Password</label>
        <input id="password" v-model="form.data.password" type="password" class="input px-3 py-1.5 w-full" required />
      </div>
      <div class="mb-6">
        <label for="confirmPassword" class="mb-1 inline-block font-semibold text-sm text-slate-200">Confirm Password</label>
        <input id="confirmPassword" v-model="form.data.confirmPassword" type="password" class="input px-3 py-1.5 w-full" required />
      </div>

      <div>
        <button type="submit" :disabled="form.pending" class="btn-primary w-full mt-1">Sign in</button>
      </div>
  
      <NuxtLink to="/login" class="text-link-primary py-3">Hai già un account?</NuxtLink>
    </form>
  </template>
  
  <script lang="ts" setup>
    const form: any = reactive({
      data: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      error: "",
      pending: false,
    });
  
    const { signin } = await useAuth()
    //const router = useRouter()
    
    async function onSigninClick() {
      try {
        form.error = "";
        form.pending = true;
  
        await signin(form.data);
  
        const redirect = "/login";
        await navigateTo(redirect);
      } catch (error: any) {
        console.error(error);
  
        if (error.data.message) form.error = error.data.message;
      } finally {
        form.pending = false;
      }
    }
  </script>
  
  
  