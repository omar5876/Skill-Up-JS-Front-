import axios from 'axios';

export const walletApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
});
