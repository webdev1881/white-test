<template>
    <header class="shadow-md left-0 right-0 z-10 fixed inset-x-0 top-0 z-3xl flex flex-col transition-[red,h-5 ] bg-gradient-to-b from-primary h-header md:h-header-md">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-white">My App</NuxtLink>
        <div>
          <template v-if="isLogged">
            <span class="mr-4">Welcome, {{ user }}</span>
            <span class="mr-4">isLogged, {{ isLogged }}</span>
            <button 
              @click="logout" 
              class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </template>
          <NuxtLink 
            v-else 
            to="/signin" 
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </NuxtLink>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/user'
  
  const router = useRouter()
  const userStore = useUserStore()
  
  const user = computed(() => userStore.getUser)
  const isLogged = computed(() => userStore.isLogged)
  
  const logout = () => {
    userStore.logout()
    router.push('/')
  }
  </script>