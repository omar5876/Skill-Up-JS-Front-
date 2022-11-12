import React from 'react';

import {
    Paper,
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

function CategoriesDashboard() {
    const { categories } = useSelector((state) => state.categories);
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
                                <TableCell>id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Descripcion</TableCell>
                                <TableCell align="right">Editar</TableCell>
                                <TableCell align="right">Borrar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories.map((item, index) => (
                                <TableCard item={item} key={index} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default CategoriesDashboard;
