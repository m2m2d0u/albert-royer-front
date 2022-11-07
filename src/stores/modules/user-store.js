import {
    createdUser,
    getRoles,
    getUserById,
    getUsers,
    resetPassword,
    updateUser,
    validateEmail
} from "@/_helpers/fetch-wrapper";

export const SET_IS_CREATED = 'SET_IS_CREATED'
export const SET_IS_MODIFIED = 'SET_IS_MODIFIED'
export const SET_LOADING = 'SET_LOADING'
export const SET_DATA = 'SET_DATA'
export const SET_ROLES = 'SET_ROLES'
export const SET_USER = 'SET_USER'

const state = {
    isCreated: false,
    isModified: false,
    isLoading: false,
    data: {},
    user: null,
    totalItems: 0,
    roles: []
}

const getters = {}

const mutations = {
    [SET_IS_CREATED](state, value) {
        state.isCreated = value
    },
    [SET_IS_MODIFIED](state, value) {
        state.isModified = value
    },
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
    [SET_DATA](state, value) {
        state.data = value
    },
    [SET_ROLES](state, value) {
        state.roles = value
    },
    [SET_USER](state, value) {
        state.user = value
    },
}

const actions = {
    async createUser({commit}, payload) {
        commit(SET_LOADING, true)
        await createdUser(payload).then(() => {
            commit(SET_IS_CREATED, true)
        }).catch((error => {
            return Promise.reject(error.response.message)
        }))
        commit(SET_LOADING, false)
    },
    async getUsers({commit}, payload) {
        // console.log("Payload:", payload)
        const page = payload.page || 1
        const size = payload.size || 10
        const search = payload.search || {}
        commit(SET_LOADING, true)
        await getUsers(`page=${page}&size=${size}&search=${JSON.stringify(search)}`).then((data) => {
            // console.log(data)
            commit(SET_DATA, data)
        })
        commit(SET_LOADING, false)
    },
    async getRoles({commit}) {
        commit(SET_LOADING, true)
        await getRoles().then((data) => {
            commit(SET_ROLES, data)
        })
        commit(SET_LOADING, false)
    },
    async getUserById({commit}, id) {
        commit(SET_LOADING, true)
        await getUserById(id).then((data) => {
            commit(SET_USER, data)
        })
        commit(SET_LOADING, false)
    },
    async updateUser({commit}, payload) {
        const {id, ...data} = payload;
        commit(SET_LOADING, true)
        await updateUser(id, data).then(() => {
            commit(SET_IS_MODIFIED, true)
        }).catch(error => {
            return Promise.reject(error.response.message)
        })
        commit(SET_LOADING, false)
    },
    // eslint-disable-next-line no-unused-vars
    async validateEmail({commit}, payload) {
        await validateEmail(payload).then(() => {
        }).catch(error => {
            return Promise.reject(error.response.message)
        })
    },
    // eslint-disable-next-line no-unused-vars
    async resetPassword({commit}, payload) {
        await resetPassword(payload).then(() => {
        }).catch(error => {
            return Promise.reject(error.response.message)
        })
    }

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
