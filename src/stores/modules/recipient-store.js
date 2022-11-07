import {addDecision, fetchOrSearchRecipient, findRecipientTestById} from "@/_helpers/fetch-wrapper";

export const SET_RECIPIENTS = 'SET_RECIPIENTS'
export const SET_LOADING = 'SET_LOADING'
export const SET_RECIPIENT = 'SET_RECIPIENT'

const state = {
    recipients: [],
    isLoading: false,
    recipient: null,
}

const getters = {}

const mutations = {
    [SET_RECIPIENTS](state, data) {
        state.recipients = data
    },
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
    [SET_RECIPIENT](state, value) {
        state.recipient = value
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
    },
    async addDecision({commit}, payload) {
        const {id, ...result} = payload
        commit(SET_LOADING, true)
        await addDecision(id, result);
        commit(SET_LOADING, false)
    },
    async findRecipientTestById({commit}, id) {
        console.log("Id:", id)
        commit(SET_LOADING, true)
        commit(SET_RECIPIENT, await findRecipientTestById(id))
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
