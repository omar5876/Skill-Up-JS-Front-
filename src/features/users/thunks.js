import axios from 'axios';
import { walletApi } from '../../api/walletApi';
import { setUsers } from './usersSlice';

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
