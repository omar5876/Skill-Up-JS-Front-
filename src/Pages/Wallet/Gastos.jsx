import React from 'react';
import { Box, Typography } from '@mui/material';
import SaldoForm from '../../Components/Formularios/CargaSaldo/SaldoForm';
import styled from '@emotion/styled';

const Container = styled.div`
    margin: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Gastos() {
    return (
        <Container>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" style={{ marginBottom: '1em' }}>
                    Realice registro de gastos
                </Typography>
                <SaldoForm categoryId={11} />
            </Box>
        </Container>
    );
}

export default Gastos;
