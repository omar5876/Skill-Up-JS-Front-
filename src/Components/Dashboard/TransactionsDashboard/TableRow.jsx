import React, { useState } from "react";

import { Button, TableCell, TableRow } from "@mui/material";

import { Link } from "react-router-dom";

function RowTable({ item }) {
  const [editarSaldo, setEditarSaldo] = useState();

  const onPressEdit = () => {
    setEditarSaldo(item);
  };

  return (
    <>
      <TableRow
        key={item.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
            <Link to={`/editar/$item.id`} onClick={onPressEdit}>
              Editar
            </Link>
          </Button>
        </TableCell>

        <TableCell align="right">
          {" "}
          <Button
          //   onClick={() => cancelarTurno(item.id)}
          >
            Borrar
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default RowTable;
