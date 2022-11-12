import React, { useEffect } from 'react';
import TransactionsDashboard from '../../Components/Dashboard/TransactionsDashboard/Dashboard';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../features/transactions/thunks';

const Container = styled.div`
    margin: 20px;
    text-align: center;
`;

function TransactionsBackoffice() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactions());
    }, []);

    return (
        <Container>
            <Typography variant="h4">Administrar Transacciones</Typography>
            <TransactionsDashboard />
        </Container>
    );
}

export default TransactionsBackoffice;
