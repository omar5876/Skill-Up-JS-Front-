import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import { useSelector } from 'react-redux';

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
    const { user } = useSelector((state) => state.auth);
    const [toggle, setToggle] = React.useState(false);
    const [hideBalance, setHideBalance] = React.useState(false);
    const [balance, setBalance] = React.useState('');
    return (
        <Container>
            <Typography sx={{ marginTop: '20px' }}>
                Hola, <b>{user}</b>
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
                        {hideBalance ? '$ •••••' : '$ ' + balance + '500'}
                    </Typography>
                </BalanceBox>
            </StyledBox>
            <StyledBox
                sx={{ gap: '50px', flexDirection: { xs: 'column', md: 'row' } }}
            >
                <BalanceBox sx={{ border: '2px solid green' }}>
                    <Typography fontSize={14}>BALANCE INGRESOS</Typography>
                    <Typography variant="h5">
                        {hideBalance ? '$ •••••' : '$ ' + balance + '1000'}
                    </Typography>
                </BalanceBox>
                <BalanceBox sx={{ border: '2px solid red' }}>
                    <Typography fontSize={14}>BALANCE EGRESOS</Typography>
                    <Typography variant="h5">
                        {hideBalance ? '$ •••••' : '$ ' + balance + '500'}
                    </Typography>
                </BalanceBox>
            </StyledBox>
        </Container>
    );
}

export default Home;
