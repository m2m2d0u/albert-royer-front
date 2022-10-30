import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from './index/index'
import ServicePage from './services/services'
import Connexion from "@/app/shared/pages/Connexion";
import Subtest from "@/app/quiz/pages/Subtest";
import Administration from "@/app/shared/pages/Administration";

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
        component: Subtest
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion
    },
    {
        path: '/admin',
        name: 'Administration',
        component: Administration
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0};
    }
})

export default router;
