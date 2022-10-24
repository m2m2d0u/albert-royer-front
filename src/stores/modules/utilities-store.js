export const SET_ERROR = 'SET_ERROR'
export const SET_MESSAGE = 'SET_MESSAGE'

const state = {
    isError: false,
    errorMessage: '',
}

const getters = {}

const mutations = {
    [SET_ERROR](state, value) {
        state.isError = value
    },
    [SET_MESSAGE](state, value) {
        state.errorMessage = value
    },
}

const actions = {
    setError({commit}, payload) {
        commit(SET_ERROR, payload)
    },
    setMessage({commit}, payload) {
        commit(SET_MESSAGE, payload)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
