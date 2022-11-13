import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setUsers: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.errorMessage = '';
        },
        setDeleteUser: (state, action) => {
            state.isLoading = false;
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
        },
        setErrorMessage: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        clearUsers: (state) => {
            state.isLoading = false;
            state.users = [];
            state.errorMessage = '';
        },
    },
});

export const {
    startLoadingUsers,
    setUsers,
    clearUsers,
    setErrorMessage,
    setDeleteUser,
} = usersSlice.actions;
