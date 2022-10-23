import {HTTP} from "@/_helpers/axios";

export const fetchAllSubTest = async () => await HTTP.get('/subtest')

export const submitResponse = async (data) => await HTTP.post('/subtest/submit', data)

export const fetchSubTestByName = async (name) => await HTTP.get(`/subtest/${name}`)

export const fetchSubTestById = async (id) => await HTTP.get(`/subtest/${id}/by-id`)

export const fetchQuizByName = async (name) => await HTTP.get(`/quiz/${name}`)
