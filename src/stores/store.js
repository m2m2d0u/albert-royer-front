import quiz from './modules/management-store'
import user from './modules/user-store'
import auth from './modules/auth-store'
import recipient from './modules/recipient-store'
import utilities from './modules/utilities-store'
import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        quiz,
        user,
        auth,
        recipient,
        utilities
    },
    plugins: []
})
export default store;
