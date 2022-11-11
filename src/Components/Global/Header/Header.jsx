import React, { useState } from 'react';
import {
    Box,
    Toolbar,
    Container,
    Button,
    MenuItem,
    AppBar,
} from '@mui/material';

import items from './Items';
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../features/auth/thunks';

console.log(items);

function Header() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <AppBar position="static" color="default" style={{ padding: '10px' }}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Box>
                        <Link to="/wallet">
                            <AccountBalanceIcon fontSize="large" />
                        </Link>
                    </Box>
                    <Box>
                        {items.map((item) => {
                            return (
                                <Button>
                                    <Link to={item.path}>{item.name}</Link>
                                </Button>
                            );
                        })}
                        <Button>
                            <Link onClick={handleLogout}>Salir</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
