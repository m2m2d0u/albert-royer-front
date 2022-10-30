import {HTTP} from "@/_helpers/axios";

export const fetchAllSubTest = async () => HTTP.get('/subtest')

export const createdUser = async (data) => HTTP.post('/user', data)

export const submitResponse = async (data) => HTTP.post('/recipient/test', data)

export const fetchSubTestById = async (id) => HTTP.get(`/subtest/${id}/by-id`)

export const login = async (data) => HTTP.post(`/auth/login`, data)
