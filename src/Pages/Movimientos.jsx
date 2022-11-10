import React, { useState, useEffect} from "react";
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
} from "@mui/material";

import axios from 'axios';

import TableDashboard from "../Components/Dashboard/Dashboard";

function Movimientos() {
  const [data, setData] = useState([  
  ]);



  const getTransacciones = (e) => {
      axios.get("http://localhost:3000/transactions").then((response) => {
        setData(response.data.body);      
      });
    };

    useEffect(() => {
      getTransacciones(),
      filterIngresos () 

    }, []);
  
  const [ingresos, setIngresos] = useState([])
  const filterIngresos = () => {
      const listado= 
      data.filter(
        (ingreso) => ingreso.categoryId === 11
      );      
    setIngresos(listado);
    console.log(ingresos)
      return listado;
    };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        width: "80vw",
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
            <TableDashboard data={data} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Movimientos;
