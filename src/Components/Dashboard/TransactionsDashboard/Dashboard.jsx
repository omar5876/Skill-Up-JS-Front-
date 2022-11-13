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

function TransactionsDashboard() {
    const { transactions } = useSelector((state) => state.transactions);
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
                                <TableCell>Concepto</TableCell>
                                <TableCell align="right">Monto</TableCell>
                                <TableCell align="right">Fecha</TableCell>
                                <TableCell align="right">User</TableCell>
                                <TableCell align="right">Categoria</TableCell>
                                <TableCell align="right">Editar</TableCell>
                                <TableCell align="right">Borrar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((item, index) => (
                                <TableCard item={item} key={index} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default TransactionsDashboard;
