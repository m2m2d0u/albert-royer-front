import {fetchAllSubTest, fetchSubTestById, submitResponse} from "@/_helpers/fetch-wrapper";

export const SET_ALL_TEST = 'SET_ALL_TEST'
export const SET_ONE_TEST = 'SET_ONE_TEST'
export const SET_LOADING = 'SET_LOADING'
export const SET_ONE_QUIZ = 'SET_ONE_QUIZ'
export const SUBMIT_QUIZ = 'SUBMIT_QUIZ'

const state = {
    tests: [],
    isLoading: false,
    quiz: null
}

const getters = {
    getSubTestById: (state) => {
        return (id) => {
            return state?.tests.find(quiz => quiz.id === id)
        }
    }
}

const mutations = {
    [SET_ALL_TEST](state, tests) {
        state.tests = tests
    },
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
    [SET_ONE_TEST](state, value) {
        state.oneTest = value
    },
}

const actions = {
    async fetchAllTest({commit}) {
        commit(SET_LOADING, true)
        commit(SET_ALL_TEST, await fetchAllSubTest());
        commit(SET_LOADING, false)
    },
    // eslint-disable-next-line no-unused-vars
    async submitResponse({commit, rootState}, payload) {
        await submitResponse(payload)
        // console.log("Root state:", rootState.auth.info)
    },
    async getTestById({commit}, payload) {
        commit(SET_LOADING, true)
        commit(SET_ONE_TEST, await fetchSubTestById(payload));
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
