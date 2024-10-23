<!-- components/Card.vue -->
<script lang="ts" setup>
import { computed } from 'vue'
import { useNuxtApp } from '#app'
import { useUserStore } from '@/stores/user'

const props = defineProps<{
  item: {
    id: number
    title: string
    description: string
    image: string
  }
}>()

const userStore = useUserStore()



// const isFavorite = computed(() => userStore.isFavorite(props.item.id))

const toggleFavorite = () => {
  userStore.toggleFavorite(props.item.id)
}

</script>

<template>
  <div class="wrapper bg-white bg-gradient-to-r from-base from-10% ">


    <!-- {{ item }} -->
    <div class="gradient absolute top-0 left-0 w-full h-full shadow-3xl   "></div>


    <img :src="item.allimages?.landscape?.orig" :alt="item.title" class="w-full"  />

    <div class="p-4 absolute top-[50%]">
      <h3 class="text-lg font-semibold">{{ item.title }}</h3>
      <p class="z-10">{{ item.description }}</p>
      <button v-if="userStore.isLogged" @click="toggleFavorite"
        class="mt-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
        <!-- {{ userStore.isFavorite(item.id) ? 'Remove from Favorites' : 'Add to Favorites' }} -->
      </button>
    </div>
  </div>
</template>

