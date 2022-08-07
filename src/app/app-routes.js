import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from './index/index'
import ServicePage from './services/services'
import Quiz from "@/app/quiz";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: IndexPage
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicePage
    },
    {
        path: '/quiz/:id',
        name: 'Quiz',
        component: Quiz
    }
    /*  {
        path: '/about',
        name: 'About',
        component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
    }*/
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;