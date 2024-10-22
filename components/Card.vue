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
  <div class="bg-white rounded-lg shadow-md overflow-hidden">


    <!-- {{ item }} -->

    <img :src="item" :alt="item.title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ item.title }}</h3>
      <p class="text-gray-600">{{ item.description }}</p>
      <button v-if="userStore.isLogged" @click="toggleFavorite"
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        <!-- {{ userStore.isFavorite(item.id) ? 'Remove from Favorites' : 'Add to Favorites' }} -->
      </button>
    </div>
  </div>
</template>

