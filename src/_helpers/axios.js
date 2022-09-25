import axios from 'axios';

export const HTTP = axios.create({
    baseURL: ` http://localhost:8070/api/v1`
})

HTTP.interceptors.response.use(
    async res => await res.data.message,
    error => {
        console.log(error)
    }
)
