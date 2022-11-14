import {HTTP} from "@/_helpers/axios";
import {authHeader} from "@/_helpers/user-service";

export const fetchAllSubTest = async () => HTTP.get('/subtest')

export const checkIfRecipientHasTest = async (id) => HTTP.get(`/recipient/test/${id}/haveTest`, {headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const refreshToken = async (refresh_token) => HTTP.post(`/auth/refresh-token`, {refresh_token})

export const createdUser = async (data) => HTTP.post('/user', data)

export const getUsers = async (data) => HTTP.get(`/user?${data}`,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const getRoles = async () => HTTP.get('/role')

export const getUserById = async (id) => HTTP.get(`/user/${id}`,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const updateUser = async (id, data) => HTTP.put(`/user/${id}/update`, data,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const validateEmail = async (data) => HTTP.post(`/user/confirm-email`, data)

export const resetPassword = async (data) => HTTP.post(`/user/reset-password`, data)

export const submitResponse = async (data) => HTTP.post('/recipient/test', data,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const fetchSubTestById = async (id) => HTTP.get(`/subtest/${id}/by-id`,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const downloadPdf = async (data) => HTTP.get(`/subtest/pdf/download/${data}`,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const login = async (data) => HTTP.post(`/auth/login`, data)

export const fetchOrSearchRecipient = async (data) => HTTP.get(`recipient/test?${data}`,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const addDecision = async (id, data) => HTTP.put(`recipient/test/${id}/add-decision`, data,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})

export const findRecipientTestById = async (id) => HTTP.get(`recipient/test/${id}`,{headers: {Authorization: `Bearer ${authHeader().access_token}`}})
