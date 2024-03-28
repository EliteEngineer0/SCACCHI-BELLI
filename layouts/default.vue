<template>
  <div class="min-h-screen flex flex-col text-white">
    <header class="flex justify-center bg-blur p-4 mx-auto w-full shadow-md">
      <nav class="w-full lg:w-3/4 md:w-full xl:w-3/4 flex gap-5 text-white"> 
        <!-- Home -->
        <NuxtLink to="/" class="navbar-link">
          <Icon name="teenyicons:home-solid" color="white" class="h-full text-2xl text-center"/>
          <h1 class="font-bold align-middle">Home</h1>
        </NuxtLink>
        <!-- Profile -->
        <NuxtLink to="/private" v-if="authUser" class="navbar-link">
          <Icon name="iconamoon:profile-circle-fill" color="white" class="h-full text-3xl text-center"/>
          <h1 class="font-bold align-middle">Profile</h1>
        </NuxtLink>
        <!-- Admin -->
        <NuxtLink to="/admin" v-if="isAdmin" class="navbar-link">
          <Icon name="uis:lock-access" color="white" class="h-full text-3xl text-center"/>
          <h1 class="font-bold align-middle">Admin</h1>
        </NuxtLink>
        
        <!-- Signin -->
        <div class="ml-auto break-inside-avoid">
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
    <main class="p-3 mx-auto md:w-full lg:w-3/4">
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