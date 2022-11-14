import axios from 'axios';

const walletApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

walletApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        config.headers = {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export { walletApi };
