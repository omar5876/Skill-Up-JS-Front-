import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        startLoadingCategories: (state) => {
            state.isLoading = true;
        },
        setCategories: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
            state.errorMessage = '';
        },
        setErrorMessage: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        clearCategories: (state) => {
            state.isLoading = false;
            state.categories = [];
            state.errorMessage = '';
        },
    },
});

export const {
    startLoadingCategories,
    setCategories,
    clearCategories,
    setErrorMessage,
} = categoriesSlice.actions;
