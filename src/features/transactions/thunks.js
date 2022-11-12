import axios from 'axios';
import { walletApi } from '../../api/walletApi';
import {
    setErrorMessage,
    setTransactions,
    startLoadingTransactions,
} from './transactionsSlice';

export const getCategories = () => {
    return async (dispatch, getState) => {
        try {
            const { uid, role } = getState().auth;
            dispatch(startLoadingTransactions());
            if (role === 'ADMIN') {
                const { data } = await walletApi.get(`/transactions/`);
                dispatch(setTransactions(data.body));
            } else {
                const { data } = await walletApi.get(
                    `/transactions/user/${uid}`
                );
                dispatch(setTransactions(data.body));
            }
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
