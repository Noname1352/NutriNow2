import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const router = createRouter({
    routes: [
    {
        path: '/',
        component: Main,
        name: 'main'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    }],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')