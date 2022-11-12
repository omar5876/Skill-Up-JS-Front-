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
import { useSelector } from 'react-redux';

function Header() {
    const { uid } = useSelector((state) => state.auth);
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
                    {uid && (
                        <Box>
                            {items.map((item) => {
                                return (
                                    <Button>
                                        <Link to={item.path}>{item.name}</Link>
                                    </Button>
                                );
                            })}
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
