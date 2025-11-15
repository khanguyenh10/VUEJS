import {createRouter, createWebHistory  } from 'vue-router';
import Homepage from '@/views/Home.vue';
import AboutPage from '@/views/About.vue';
const routes = [
    {
        path: "/",
        component: Homepage
    }   ,
    {
        path: "/about",
        component: AboutPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;