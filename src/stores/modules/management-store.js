import {fetchAllSubTest, fetchQuizByName, fetchSubTestByName} from "@/_helpers/fetch-wrapper";

export const SET_ALL_TEST = 'SET_ALL_TEST'
export const SET_ONE_TEST = 'SET_ONE_TEST'
export const SET_LOADING = 'SET_ONE_TEST'
export const SET_ONE_QUIZ = 'SET_ONE_QUIZ'

const state = {
    tests: [],
    isLoading: false,
    quiz: null
}

const getters = {
    filterTestByName: (state) => {
        return (name) => state.tests.find((test) => test.name === name)
    },
    loadingStatus: (state) => state.isLoading,
    getQuiz: (state) => state.quiz,
    getSubTestOfTest: (state) => {
        return (name, subTestName) => {
            const testFound = state.tests.find((test) => test.name === name);
            return testFound?.quiz?.find(quiz => quiz.name === subTestName)
        }
    },
}

const mutations = {
    [SET_ALL_TEST](state, tests) {
        state.tests = tests
    },
    [SET_LOADING](state, value) {
        state.isLoading = value
    },
    [SET_ONE_QUIZ](state, value) {
        state.quiz = value
    },
}

const actions = {
    async fetchAllTest({commit}) {
        // const delay = ms => new Promise(res => setTimeout(res, ms));
        commit(SET_LOADING, true)
        commit(SET_ALL_TEST, await fetchAllSubTest());
        commit(SET_LOADING, false)
    },
    async fetchTestByName({commit}, name) {
        commit(SET_LOADING, true)
        commit(SET_ONE_TEST, await fetchSubTestByName(name));
        commit(SET_LOADING, false)
    },
    async fetchQuizByName({commit}, name) {
        commit(SET_LOADING, true)
        commit(SET_ONE_QUIZ, await fetchQuizByName(name));
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
