import axios from 'axios';
import { walletApi } from '../../api/walletApi';
import { alertConfirmation } from '../../Components/Alert/Alert';
import {
    setCategories,
    setDeleteCategory,
    setErrorMessage,
    startLoadingCategories,
} from './categoriesSlice';

export const getCategories = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingCategories());
            const { data } = await walletApi.get(`/categories/`);
            dispatch(setCategories(data.body));
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

export const deleteCategory = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingCategories());
            const { data } = await walletApi.delete(`/categories/${id}`);
            dispatch(setDeleteCategory(id));
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
