import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

export default defineNuxtPlugin((nuxtApp) => {

  const userStore = useUserStore()


  const api = $fetch.create({
    baseURL: 'https://sat7.faulio.com/api/v1',
    onRequest({ request, options, error }) {
      const token = localStorage.getItem('token')
      if (token) {
        userStore.setToken(token)
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/'))
      }
    }
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api
    }
  }
})
