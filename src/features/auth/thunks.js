import axios from 'axios';
import { walletApi } from '../../api/walletApi';
import { setErrorMessage, setUser, startLoadingUser } from './authSlice';

export const login = (email, password) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingUser());
            const { data } = await walletApi.post('/auth/login', {
                email,
                password,
            });
            localStorage.setItem('token', data.body.accessToken);
            dispatch(setUser(data.body));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error) {
                    const err = error.response.data;
                    const { msg } = err;
                    dispatch(setErrorMessage(msg));
                }
            } else {
                throw new Error('An unexpected error ocurred');
            }
        }
    };
};

export const renewUser = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        localStorage.clear();
        try {
            if (token) {
                const { data } = await walletApi.get('/auth/renew');
                const { accessToken, ...userData } = data;

                localStorage.setItem('token', newToken);

                dispatch(setUser(userData));
            }
        } catch (error) {
            console.log(error);
        }
    };
};