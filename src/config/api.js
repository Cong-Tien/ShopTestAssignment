import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosClient = axios.create({
    baseURL: "https://testshoesbe-production.up.railway.app/api/v1/",
    headers: {
        'content-type': 'application/json',
    },
});


axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return error;
    }
);
export default axiosClient;
