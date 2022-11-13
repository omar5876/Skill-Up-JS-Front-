import axios from 'axios';
import { walletApi } from '../../api/walletApi';
import { clearCategories } from '../categories/categoriesSlice';
import { clearTransactions } from '../transactions/transactionsSlice';
import { clearUsers } from '../users/usersSlice';
import {
    logout,
    setErrorMessage,
    setUser,
    startLoadingUser,
} from './authSlice';

export const login = (email, password) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingUser());
            const { data } = await walletApi.post('/auth/login', {
                email,
                password,
            });
            console.log(data);
            localStorage.setItem('access_token', data.body.accessToken);
            dispatch(setUser(data.body.user));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error) {
                    const err = error.response.data;
                    const { msg } = err;
                    dispatch(setErrorMessage(msg));
                }
            } else {
                throw new Error('Ocurrio un error inesperado');
            }
        }
    };
};

export const renewUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await walletApi.get('/auth/renew');
            const { user, accessToken } = data.body;

            localStorage.setItem('access_token', accessToken);

            dispatch(setUser(user));
        } catch (error) {
            throw new Error('Ocurrio un error inesperado');
        }
    };
};

export const register = ({ email, password, firstName, lastName }) => {
    return async (dispatch) => {
        dispatch(startLoadingUser());
        try {
            await walletApi.post('/users/', {
                email,
                password,
                firstName,
                lastName,
            });

            dispatch(login(email, password));
        } catch (error) {
            throw new Error('Ocurrio un error inesperado');
        }
    };
};

export const startLogout = (formData) => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
        dispatch(clearTransactions());
        dispatch(clearUsers());
        dispatch(clearCategories());
    };
};
