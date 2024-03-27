<template>
    <form @submit.prevent="onSigninClick">
      <FormError v-if="form.error">
        {{ form.error }}
      </FormError>
      <div class="mb-3">
        <label for="email" class="mb-1 inline-block font-semibold text-sm text-slate-200">Email address</label>
        <input id="email" v-model="form.data.email" type="email" class="input px-3 py-1.5 w-full" required />
      </div>
      <div class="mb-3">
        <label for="password" class="mb-1 inline-block font-semibold text-sm text-slate-200">Password</label>
        <input id="password" v-model="form.data.password" type="password" class="input px-3 py-1.5 w-full" required />
      </div>
      <div class="mb-3 flex justify-end items-center">
        <label for="remember-me" class="mr-1 text-sm text-light-100">Remember me</label>
        <input id="remember-me" v-model="form.data.rememberMe" type="checkbox" class="w-4 h-4 checkbox-primary" />
      </div>
      <div>
        <button type="submit" :disabled="form.pending" class="btn-primary w-full mt-1">Log in</button>
      </div>
  
      <NuxtLink to="/signin" class="text-link-primary py-3">Non hai ancora un account?</NuxtLink>
    </form>
  </template>
  
  <script lang="ts" setup>
    const form: any = reactive({
      data: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      error: "",
      pending: false,
    });
  
    const { login, isAdmin } = await useAuth()
    //const router = useRouter()
    
    async function onSigninClick() {
      try {
        form.error = "";
        form.pending = true;
  
        await login(form.data);
  
        const redirect = isAdmin.value ? "/admin" : "/private";
        await navigateTo(redirect);
      } catch (error: any) {
        console.error(error);
  
        if (error.data.message) form.error = error.data.message;
      } finally {
        form.pending = false;
      }
    }
  </script>
  
  
  