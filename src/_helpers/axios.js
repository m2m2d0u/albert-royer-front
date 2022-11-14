import axios from 'axios';
import {refreshToken} from "@/_helpers/fetch-wrapper";
import {getRefreshToken} from "@/_helpers/user-service";

export const HTTP = axios.create({
    baseURL: process.env.VUE_APP_URL
})

HTTP.interceptors.response.use(
    async res => res.data.message,
    error => {
        return Promise.reject({response: error.response.data, statusCode: error.response.status, data: error})
    }
)

// Response interceptor for API calls
HTTP.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.data.config;
    if (error.data.response.status === 401 && error.data.response.statusText === 'Unauthorized' && !originalRequest._retry) {
        console.log(originalRequest)
        // console.log(getRefreshToken())
        originalRequest._retry = true;
        const {access_token, refresh_token} = await refreshToken(getRefreshToken().refresh_token);
        localStorage.setItem("user", JSON.stringify({access_token, refresh_token}))
        originalRequest.headers.Authorization = 'Bearer ' + access_token;
        return HTTP(originalRequest);
    }
    return Promise.reject(error);
});
