<template>
  <div class="min-h-screen flex flex-col text-white">
    <header class="flex justify-center bg-blur p-3 mx-auto w-full shadow-md">
      <nav class="w-3/4 flex gap-3 text-white"> 
        <NuxtLink to="/" class="underline">Home</NuxtLink>
        <NuxtLink to="/public" class="underline">Public</NuxtLink>
        <NuxtLink to="/private" v-if="authUser" class="underline">Private</NuxtLink>
        <NuxtLink to="/admin" v-if="isAdmin" class="underline">Admin</NuxtLink>
        <!-- Signin -->
        <div class="ml-auto items-center">
          <button
            v-if="!authUser"
            class="btn-stealth me-3" 
            @click="signIn()"
          >
            Signin
          </button>
          <!-- Login and Logout -->
          <button
            class="btn-primary" 
            :disabled="form.pending"
            @click="callToAction()"
          >
            {{ form.callToActionText }}
          </button>
        </div>
      </nav>
    </header>
    <main class="p-3 mx-auto w-full">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
  const authUser: any = useAuthUser()
  const { isAdmin, logout } = await useAuth()
  const router = useRouter()

  const form = reactive({
    pending: false,
    callToActionText: "Login"
  });

  async function logOut() {
    try {
      form.pending = true;

      await logout();

      await navigateTo("/");
    } catch (error) {
      console.error(error);
    } finally {
      form.pending = false;
    }
  }

  async function logIn() {
    await navigateTo("/login")
  }

  async function signIn() {
    await navigateTo("/signin")
  }

  async function callToAction() {
    if(authUser.value){
      await logOut()
    }else{
      await logIn()
    }
  }

  async function updateCallToActionText() {
    if(authUser.value){
      form.callToActionText = "Logout"
    }else{
      form.callToActionText = "Login"
    }
  }

  watch(authUser, () => {
    updateCallToActionText();
  });
  
  updateCallToActionText()
</script>

<style setup>
  body {
    background-image: url(~/assets/images/background.png);
  }
</style>