import {HTTP} from "@/_helpers/axios";

export const fetchAllSubTest = async () => await HTTP.get('/subtest')

export const fetchSubTestByName = async (name) => await HTTP.get(`/subtest/${name}`)

export const fetchQuizByName = async (name) => await HTTP.get(`/quiz/${name}`)
