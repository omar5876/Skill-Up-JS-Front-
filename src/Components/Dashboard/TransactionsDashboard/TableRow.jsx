import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, TableCell, TableRow } from '@mui/material';

import { deleteTransaction } from '../../../features/transactions/thunks.js';
import { alertWarning } from '../../Alert/Alert';

function RowTable({ item }) {
    const dispatch = useDispatch();
    const [editarTransaccion, setEditarTransaccion] = useState();

    const onPressEdit = () => {
        setEditarTransaccion(item);
    };

    const handleDelete = (id) => {
        dispatch(deleteTransaction(id));
    };

    return (
        <>
            <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover
            >
                <TableCell component="th" scope="row">
                    {item.description}
                </TableCell>
                <TableCell align="right">{item.amount}</TableCell>
                <TableCell align="right">{item.createdAt}</TableCell>
                <TableCell align="right">{item.userId}</TableCell>
                <TableCell align="right">{item.categoryId}</TableCell>
                <TableCell align="right">
                    <Button>
                        <Link to={`/editar/${item.id}`} onClick={onPressEdit}>
                            Editar
                        </Link>
                    </Button>
                </TableCell>

                <TableCell align="right">
                    {' '}
                    <Button
                        onClick={() =>
                            alertWarning(
                                item.description,
                                item.id,
                                handleDelete
                            )
                        }
                    >
                        Borrar
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}

export default RowTable;
