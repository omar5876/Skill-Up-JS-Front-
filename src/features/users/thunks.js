import axios from 'axios';
import { walletApi } from '../../api/walletApi';
import { alertConfirmation } from '../../Components/Alert/Alert';
import { setUser } from '../auth/authSlice';
import { setDeleteUser, setUsers, startLoadingUsers } from './usersSlice';

export const getUsers = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await walletApi.get(`users/`);
            console.log(data);
            dispatch(setUsers(data.body));
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

export const deleteUser = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingUsers());
            const { data } = await walletApi.delete(`/users/${id}`);
            dispatch(setDeleteUser(id));
            alertConfirmation(data.message);
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

export const editUser = (values) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingUsers());
            const { uid } = getState().auth;
            const { data } = await walletApi.put(`/users/${uid}`, values);
            dispatch(setUser(data.body));
            alertConfirmation(data.message);
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

export const uploadImage = (formData) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingUsers());
            const { uid } = getState().auth;
            const { data } = await walletApi.put(`/users/${uid}`, formData);
            console.log(data);
            dispatch(setUser(data.body));
            alertConfirmation(data.message);
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
