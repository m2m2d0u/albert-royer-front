import {addJob, fetchById, fetchByTest, fetchOrSearchJobs, updateJob} from "@/_helpers/fetch-wrapper";

export const SET_JOBS = 'SET_JOBS'
export const SET_LOADING = 'SET_LOADING'
export const SET_JOB = 'SET_JOB'
export const SET_IS_MODIFIED = 'SET_IS_MODIFIED'
export const SET_IS_ADDED = 'SET_IS_ADDED'

const state = {
    jobs: [],
    isLoading: false,
    job: null,
    modified: false,
    added: false
}

const getters = {}

const mutations = {
    [SET_JOBS](state, data) {
        state.jobs = data
    },
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
    [SET_JOB](state, value) {
        state.job = value
    },
    [SET_IS_MODIFIED](state, value) {
        state.modified = value
    },
    [SET_IS_ADDED](state, value) {
        state.added = value
    }
}

const actions = {
    async fetchOrSearchJobs({commit}, payload) {
        const page = payload?.page || 1
        const size = payload?.size || 20
        const search = payload?.search || {}
        commit(SET_LOADING, true)
        commit(SET_JOBS, await fetchOrSearchJobs(`page=${page}&size=${size}&search=${JSON.stringify(search)}`));
        commit(SET_LOADING, false)
    },
    async fetchById({commit}, id) {
        commit(SET_LOADING, true)
        commit(SET_JOB, await fetchById(id));
        commit(SET_LOADING, false)
    },
    async updateJob({commit}, payload) {
        const {id, ...data} = payload;
        commit(SET_LOADING, true)
        await updateJob(id, data).then(() => {
            commit(SET_IS_MODIFIED, true)
        }).catch(error => {
            return Promise.reject(error.response.message)
        })
        commit(SET_LOADING, false)
    },
    async addJob({commit}, payload) {
        commit(SET_LOADING, true)
        await addJob(payload).then(() => {
            commit(SET_IS_ADDED, true)
        }).catch(error => {
            return Promise.reject(error.response.message)
        });
        commit(SET_LOADING, false)
    },
    async fetchByTest({commit}, id) {
        commit(SET_LOADING, true)
        commit(SET_JOBS, await fetchByTest(id));
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
