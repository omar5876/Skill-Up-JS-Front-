import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";

function Movimientos() {
  const [data, setData] = useState([]);

  const getTransacciones = (e) => {
    axios.get("http://localhost:3000/transactions").then((response) => {
      setData(response.data.body);
    });
  };

  useEffect(() => {
    getTransacciones(), filterIngresos();
  }, []);

  const [ingresos, setIngresos] = useState([]);
  const filterIngresos = () => {
    const listado = data.filter((ingreso) => ingreso.categoryId === 11);
    setIngresos(listado);
    console.log(ingresos);
    return listado;
  };

  return (
    <>
      <Typography variant="button">Movimientos usuario:</Typography>
    </>
  );
}

export default Movimientos;
