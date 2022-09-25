import quiz from './modules/management-store'
import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        quiz
    },
    plugins: []
})
