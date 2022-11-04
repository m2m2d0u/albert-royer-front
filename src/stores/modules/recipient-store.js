import {fetchOrSearchRecipient} from "@/_helpers/fetch-wrapper";

export const SET_RECIPIENTS = 'SET_RECIPIENTS'
export const SET_LOADING = 'SET_LOADING'

const state = {
    recipients: [],
    isLoading: false,
}

const getters = {
}

const mutations = {
    [SET_RECIPIENTS](state, data) {
        state.recipients = data
    },
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
}

const actions = {
    async fetchOrSearchRecipient({commit}, payload) {
        const page = payload.page || 1
        const size = payload.size || 20
        const search = payload.search || {}
        commit(SET_LOADING, true)
        commit(SET_RECIPIENTS, await fetchOrSearchRecipient(`page=${page}&size=${size}&search=${JSON.stringify(search)}`));
        commit(SET_LOADING, false)
    }

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
