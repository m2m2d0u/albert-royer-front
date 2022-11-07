import axios from 'axios';

export const HTTP = axios.create({
    baseURL: process.env.VUE_APP_URL
})

HTTP.interceptors.response.use(
    async res => res.data.message,
    error => {
        return Promise.reject({response: error.response.data, statusCode: error.response.status})
    }
)
