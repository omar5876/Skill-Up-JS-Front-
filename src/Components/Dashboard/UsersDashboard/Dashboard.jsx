import React, { useContext, useState, useEffect } from 'react';

import {
    Paper,
    Button,
    TableFooter,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
} from '@mui/material';

import TableCard from './TableRow.jsx';
import { useSelector } from 'react-redux';

function UsersDashboard() {
    const { users } = useSelector((state) => state.users);
    return (
        <>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80vw',
                    margin: 'auto',
                    marginTop: '10px',
                }}
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Apellido</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">roleId</TableCell>
                                <TableCell align="right">Creacion</TableCell>
                                <TableCell align="right">Editar</TableCell>
                                <TableCell align="right">Borrar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((item, index) => (
                                <TableCard item={item} key={index} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default UsersDashboard;
