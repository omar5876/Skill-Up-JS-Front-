import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

import TableCard from "./TableRow.jsx";

const datass = [
  {
    id: 11,
    name: "OUTCOME",
    description: "outcome",
  },
];

function CategoriesDashboard({ data }) {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          margin: "auto",
          marginTop: "10px",
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
              {datass.map((item, index) => (
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
