import {HTTP} from "@/_helpers/axios";

export const fetchAllSubTest = async () => HTTP.get('/subtest')

export const createdUser = async (data) => HTTP.post('/user', data)

export const getUsers = async (data) => HTTP.get(`/user?${data}`)

export const getRoles = async () => HTTP.get('/role')

export const getUserById = async (id) => HTTP.get(`/user/${id}`)

export const updateUser = async (id, data) => HTTP.put(`/user/${id}/update`, data)

export const validateEmail = async (data) => HTTP.post(`/user/confirm-email`, data)

export const resetPassword = async (data) => HTTP.post(`/user/reset-password`, data)

export const submitResponse = async (data) => HTTP.post('/recipient/test', data)

export const fetchSubTestById = async (id) => HTTP.get(`/subtest/${id}/by-id`)

export const login = async (data) => HTTP.post(`/auth/login`, data)

export const fetchOrSearchRecipient = async (data) => HTTP.get(`recipient/test?${data}`)

export const addDecision = async (id, data) => HTTP.put(`recipient/test/${id}/add-decision`, data)

export const findRecipientTestById = async (id) => HTTP.get(`recipient/test/${id}`)
