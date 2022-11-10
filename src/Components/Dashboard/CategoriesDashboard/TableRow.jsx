import React, { useState } from "react";

import { Button, TableCell, TableRow } from "@mui/material";

import { Link } from "react-router-dom";

function Rows({ item }) {
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
        <TableCell align="right">{item.id}</TableCell>
        <TableCell align="right">{item.name}</TableCell>
        <TableCell align="right" component="th" scope="row">
          {item.description}
        </TableCell>
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

export default Rows;
