import axios from 'axios';
import { walletApi } from '../../api/walletApi';
import { alertConfirmation } from '../../Components/Alert/Alert';
import {
    setDeleteTransaction,
    setErrorMessage,
    setNewTransaction,
    setTransactions,
    startLoadingTransactions,
} from './transactionsSlice';

export const getTransactions = () => {
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

export const newTransaction = ({ description, amount, categoryId }) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingTransactions());
            const newTransaction = { description, amount, categoryId };
            const { data } = await walletApi.post(
                `/transactions/`,
                newTransaction
            );
            console.log(data);
            dispatch(setNewTransaction(data.body));
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

export const deleteTransaction = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(startLoadingTransactions());
            const { data } = await walletApi.delete(`/transactions/${id}`);
            dispatch(setDeleteTransaction(data.body.id));
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
