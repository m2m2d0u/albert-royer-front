export const SET_LOADING = 'SET_LOADING'

const state = {
    isLoading: false,
}

const getters = {}

const mutations = {
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
}

const actions = {
    setLoading({commit}, payload) {
        commit(SET_LOADING, payload)
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
