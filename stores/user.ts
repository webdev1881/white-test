import { defineStore } from 'pinia'
// const { $api } = useNuxtApp()



interface User {
    id: number
    email: string
}

interface Data {
    // id: number
}

export const useUserStore = defineStore('user', {
    state: () => ({
        token: null as string | null,
        user: null as User | null,
        data: null as Data | null,
    }),
    actions: {
        setToken(token: string) {
            this.token = token
            localStorage.setItem('token', token)
        },
        setUser(user: User) {
            this.user = user
        },
        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    },
    getters: {
        isLogged: (state) => !!state.token,
        getUser: (state) => state.user,
    },
})