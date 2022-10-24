import quiz from './modules/management-store'
import user from './modules/user-store'
import utilities from './modules/utilities-store'
import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        quiz,
        user,
        utilities
    },
    plugins: []
})
