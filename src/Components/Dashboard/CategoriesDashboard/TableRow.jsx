import React, { useState } from 'react';

import { Button, TableCell, TableRow } from '@mui/material';

import { Link } from 'react-router-dom';
import { alertWarning } from '../../Alert/Alert';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../../features/categories/thunks';

function Rows({ item }) {
    const dispatch = useDispatch();
    const [editarCategoria, setEditarCategoria] = useState();

    const onPressEdit = () => {
        setEditarCategoria(item);
    };
    const handleDelete = (id) => {
        dispatch(deleteCategory(id));
    };

    return (
        <>
            <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover
            >
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right" component="th" scope="row">
                    {item.description}
                </TableCell>
                <TableCell align="right">
                    <Button>
                        <Link
                            to={`/editar-category/${item.id}`}
                            onClick={onPressEdit}
                        >
                            Editar
                        </Link>
                    </Button>
                </TableCell>

                <TableCell align="right">
                    {' '}
                    <Button
                        onClick={() =>
                            alertWarning(item.name, item.id, handleDelete)
                        }
                    >
                        Borrar
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}

export default Rows;
