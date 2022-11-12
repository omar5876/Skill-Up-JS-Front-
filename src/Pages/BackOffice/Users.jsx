import React, { useState } from 'react';
import UsersDashboard from '../../Components/Dashboard/UsersDashboard/Dashboard';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../features/users/thunks';

const Container = styled.div`
    margin: 20px;
    text-align: center;
`;

function UsersBackoffice() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <Container>
            <Typography variant="h4">Administrar Usuarios</Typography>
            <UsersDashboard />
        </Container>
    );
}

export default UsersBackoffice;
