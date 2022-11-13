import React, { useState } from 'react';

import { Button, TableCell, TableRow } from '@mui/material';

import { Link } from 'react-router-dom';
import { alertWarning } from '../../Alert/Alert';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../features/users/thunks';

function Rows({ item }) {
    const dispatch = useDispatch();
    const [editarUsuario, setEditarUsuario] = useState();

    const onPressEdit = () => {
        setEditarUsuario(item);
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <>
            <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                hover
            >
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.firstName}</TableCell>
                <TableCell align="right">{item.lastName}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.roleId}</TableCell>
                <TableCell align="right">{item.createdAt}</TableCell>
                <TableCell align="right">
                    <Button>
                        <Link
                            to={`/editar-usuario/${item.id}`}
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
                            alertWarning(item.email, item.id, handleDelete)
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
