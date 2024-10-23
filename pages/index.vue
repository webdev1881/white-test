<template>
  <div class="loader bg-base mx-auto   min-h-screen ">

    <div class="content text-white ">
      <Header />

      <!-- <Card :item="item" /> -->

      <!-- {{ items }} -->


      <main class="container mx-auto">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>

        <div v-else>
          <Carousel>
            <Slide v-for="item in items" :key="item.id">
              <!-- <div class="carousel__item">{{ item.title}}</div> -->
              <Card :item="item" />
            </Slide>
  
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>

        <!-- <div v-else>
          <Swiper 
          :loop="true"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :navigation="true"
          :slides-per-view="1"
          :space-between="150"
          @slideChange="onSlideChange"
          @swiper="onSwiper"

          :draggable="true"

          >
            <SwiperSlide v-for="item in items" :key="item.id">
              {{item.title}}
              <Card :item="item" />
            </SwiperSlide>
            <SwiperControls />
          </Swiper>

        </div> -->
      </main>


    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useUserStore } from '~/stores/user'
import Header from '@/components/Header.vue'

import type { IUser } from "@/types/user.type"

// const swiper = useSwiper()

const { $api } = useNuxtApp()
const { public: { apiUrl } } = useRuntimeConfig()

const userStore = useUserStore()
const isLogged = computed(() => userStore.isLogged)

const items = ref([]);
const isLoading = ref(true)
const error = ref('')

interface User {
  id: number
  email: string
}

export interface IUsersResponse {
  users: User[]
  total_pages: number
}



const fetchData = () => {
  try {
    nextTick(async () => {
      // const { data: programslidesobjects } = await useAsyncData('programslidesobjects',() => $api('/pageblocks/vod_main_page'))
      const { data } = await useAsyncData(() => $api('/pageblocks/vod_main_page'))
      items.value = data.value[0].programslidesobjects

      console.log(items.value)

    })
  } catch (err) {
    error.value = 'Failed to fetch items'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

const toggleFavorite = async () => {
  // try {
  //   if (item.isFavorite) {
  //     await $api.get(`/member/favorites/remove?program=${item.id}`)
  //   } else {
  //     await $api.get(`/member/favorites/add?program=${item.id}`)
  //   }
  //   item.isFavorite = !item.isFavorite
  // } catch (err) {
  //   console.error('Failed to update favorite status', err)
  // }
}



const onSwiper = (swiper) => {
  console.log(swiper);
}

const onSlideChange = () => {
  console.log('slide change')
}


onMounted(fetchData)
</script>

<style scoped></style>