import {createdUser} from "@/_helpers/fetch-wrapper";

export const SET_IS_CREATED = 'SET_IS_CREATED'
export const SET_LOADING = 'SET_LOADING'

const state = {
    isCreated: [],
    isLoading: false,
}

const getters = {}

const mutations = {
    [SET_IS_CREATED](state, value) {
        state.isCreated = value
    },
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
}

const actions = {
    async createUser({commit, dispatch}, payload) {
        commit(SET_LOADING, true)
        await createdUser(payload).then(() => {
            commit(SET_IS_CREATED, true)
        }).catch((error => {
            dispatch('utilities/setError', true, {root: true})
            dispatch('utilities/setMessage', error.response.message, {root: true})
        }))
        commit(SET_LOADING, false)
    },

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
