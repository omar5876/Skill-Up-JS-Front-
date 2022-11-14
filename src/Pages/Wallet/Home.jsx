import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../features/transactions/thunks';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const StyledTypography = styled(Typography)`
    font-size: 0.9rem;
`;

const BalanceBox = styled(Box)`
    width: 250px;
    height: 80px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    &:hover {
        opacity: 0.7;
    }
`;

const StyledBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 350px;
    margin-top: 30px;
`;

function Home() {
    const dispatch = useDispatch();
    const { firstName } = useSelector((state) => state.auth);
    const { transactions } = useSelector((state) => state.transactions);
    const [toggle, setToggle] = React.useState(false);
    const [hideBalance, setHideBalance] = React.useState(false);

    useEffect(() => {
        dispatch(getTransactions());
    }, []);

    const incomes = transactions.filter(
        (transaction) => transaction.categoryId === 12
    );
    const outcomes = transactions.filter(
        (transactions) => transactions.categoryId === 11
    );

    const totalIncomes = incomes.reduce(
        (acum, income) => acum + parseInt(income.amount),
        0
    );

    const totalOutcomes = outcomes.reduce(
        (acum, income) => acum + parseInt(income.amount),
        0
    );
    const balance = totalIncomes - totalOutcomes;
    return (
        <Container>
            <Typography sx={{ marginTop: '20px' }}>
                Hola, <b>{firstName}</b>
            </Typography>
            <StyledBox sx={{ flexDirection: 'column' }}>
                <StyledBox>
                    <StyledTypography variant="button">
                        Estado de tu cuenta
                    </StyledTypography>
                    <Button
                        onClick={() => {
                            toggle ? setToggle(false) : setToggle(true);
                            hideBalance
                                ? setHideBalance(false)
                                : setHideBalance(true);
                        }}
                    >
                        <Typography color="black" fontSize={10}>
                            Ocultar Saldo
                        </Typography>
                        {toggle ? (
                            <ToggleOnIcon fontSize="large" />
                        ) : (
                            <ToggleOffOutlinedIcon fontSize="large" />
                        )}
                    </Button>
                </StyledBox>
                <BalanceBox>
                    <Typography fontSize={14}>BALANCE</Typography>
                    <Typography variant="h5">
                        {hideBalance ? '$ •••••' : '$ ' + balance}
                    </Typography>
                </BalanceBox>
            </StyledBox>
            <StyledBox
                sx={{ gap: '50px', flexDirection: { xs: 'column', md: 'row' } }}
            >
                <BalanceBox sx={{ border: '2px solid green' }}>
                    <Typography fontSize={14}>BALANCE INGRESOS</Typography>
                    <Typography variant="h5">
                        {hideBalance ? '$ •••••' : '$ ' + totalIncomes}
                    </Typography>
                </BalanceBox>
                <BalanceBox sx={{ border: '2px solid red' }}>
                    <Typography fontSize={14}>BALANCE EGRESOS</Typography>
                    <Typography variant="h5">
                        {hideBalance ? '$ •••••' : '$ ' + totalOutcomes}
                    </Typography>
                </BalanceBox>
            </StyledBox>
        </Container>
    );
}

export default Home;
