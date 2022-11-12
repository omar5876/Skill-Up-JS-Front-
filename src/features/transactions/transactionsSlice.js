import { createSlice } from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [],
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        startLoadingTransactions: (state) => {
            state.isLoading = true;
        },
        setTransactions: (state, action) => {
            state.isLoading = false;
            state.transactions = action.payload;
            state.errorMessage = '';
        },
        setErrorMessage: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        clearTransactions: (state) => {
            state.isLoading = false;
            state.transactions = [];
            state.errorMessage = '';
        },
    },
});

export const {
    startLoadingTransactions,
    setTransactions,
    clearTransactions,
    setErrorMessage,
} = transactionsSlice.actions;
