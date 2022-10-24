import axios from 'axios';

export const HTTP = axios.create({
    baseURL: ` http://localhost:8070/api/v1`
})

HTTP.interceptors.response.use(
    async res => res.data.message,
    error => {
       return Promise.reject({response:error.response.data, statusCode: error.response.status})
    }
)
