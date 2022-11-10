import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: '',
        uid: '',
        role: '',
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        startLoadingUser: (state) => {
            state.isLoading = true;
        },
        setUser: (state, action) => {
            state.isLoading = false;
            state.uid = action.payload.id;
            state.user = action.payload.firstName;
            state.role = action.payload.role;
            state.errorMessage = '';
        },
        setErrorMessage: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        logout: (state) => {
            state.role = '';
            state.uid = '';
            state.user = '';
        },
    },
});

export const { startLoadingUser, setUser, logout, setErrorMessage } =
    authSlice.actions;
