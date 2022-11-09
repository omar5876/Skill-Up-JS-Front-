import React, { useState } from "react";

import { Button, TableFooter, TableCell, TableRow } from "@mui/material";

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
      >
        <TableCell component="th" scope="row">
          item.concepto
        </TableCell>
        <TableCell align="right">item.monto</TableCell>
        <TableCell align="right">item.fecha</TableCell>
        <TableCell align="right">item.tipo</TableCell>
        <TableCell align="right">item.categoria</TableCell>
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
