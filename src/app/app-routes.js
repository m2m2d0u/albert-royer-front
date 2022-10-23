import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from './index/index'
import ServicePage from './services/services'
// import Subtest2 from "@/app/quiz/pages/Subtest2";
// import Subtest3 from "@/app/quiz/pages/Subtest3";
// import Subtest4 from "@/app/quiz/pages/Subtest4";
// import Subtest1 from "@/app/quiz/pages/Subtest1";
import Connexion from "@/app/shared/components/Connexion";
import Subtest from "@/app/quiz/pages/Subtest";

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
    }

    // {
    //     path: '/quiz/subtest1',
    //     name: 'Quiz1',
    //     component: Subtest1
    // },
    // {
    //     path: '/quiz/subtest2',
    //     name: 'Quiz2',
    //     component: Subtest2
    // },
    // {
    //     path: '/quiz/subtest3',
    //     name: 'Quiz3',
    //     component: Subtest3
    // },
    // {
    //     path: '/quiz/subtest4',
    //     name: 'Quiz4',
    //     component: Subtest4
    // },
    /*  {
        path: '/about',
        name: 'About',
        component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
    }*/
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
