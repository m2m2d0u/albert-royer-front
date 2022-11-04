import {createdUser, login} from "@/_helpers/fetch-wrapper";
import VueJwtDecode from 'vue-jwt-decode';

export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS'
export const SET_LOGIN_FAILURE = 'SET_LOGIN_FAILURE'
export const SET_LOGOUT = 'SET_LOGOUT'
export const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS'
export const SET_REGISTER_FAILURE = 'SET_REGISTER_FAILURE'

const user = JSON.parse(localStorage.getItem('user'));
const info = user ? VueJwtDecode.decode(user.access_token) : null

const state = {
    status: {
        loggedIn: !!user
    },
    user: user ? user : null,
    info: info
}

const getters = {}

const mutations = {
    [SET_REGISTER_SUCCESS](state) {
        state.status.loggedIn = false
    },
    [SET_REGISTER_FAILURE](state) {
        state.status.loggedIn = false
    },
    [SET_LOGIN_SUCCESS](state, data) {
        state.status.loggedIn = true
        state.user = data
        state.info = VueJwtDecode.decode(data.access_token)
    },
    [SET_LOGIN_FAILURE](state) {
        state.status.loggedIn = false
    },
    [SET_LOGOUT](state) {
        state.status.loggedIn = false
        state.user = null;
        state.info = null;
    },
}

const actions = {
    async createUser({commit}, payload) {
        await createdUser(payload).then((response) => {
            commit(SET_REGISTER_SUCCESS)
            return Promise.resolve(response.data)
        }).catch((error => {
            return Promise.reject(error.response.message)
        }))
    },
    async login({commit}, payload) {
        await login(payload).then((response) => {
            commit(SET_LOGIN_SUCCESS, response)
            localStorage.setItem('user', JSON.stringify(response))
            return Promise.resolve()
        }).catch((error => {
            commit(SET_LOGIN_FAILURE)
            return Promise.reject(error.response.message)
        }))
    },
    logout({commit}) {
        localStorage.removeItem('user')
        commit(SET_LOGOUT)
    }

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
