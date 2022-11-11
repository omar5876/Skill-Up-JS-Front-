import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../Components/Formularios/LoginForm/LoginForm';
import { Box, Typography, Button, CardMedia } from '@mui/material';

import loginWallet from '../assets/login-wallet.jpeg';

function Login() {
    return (
        <Box
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                width: '100%',
            }}
        >
            <CardMedia
                component="img"
                alt="phone wallet app"
                sx={{ height: '100vh' }}
                image={loginWallet}
            />
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" style={{ marginBottom: '1em' }}>
                    Ingrese sus datos para iniciar sesion
                </Typography>
                <LoginForm />
                <Typography variant="subtitle1">
                    ¿No tienes cuenta?
                    <Button
                        component={Link}
                        to="/auth/register"
                        underline="none"
                    >
                        Registrarse
                    </Button>
                </Typography>
            </Box>
        </Box>
    );
}

export default Login;
