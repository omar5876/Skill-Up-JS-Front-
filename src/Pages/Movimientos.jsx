import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

import axios from "axios";

import TransactionsDashboard from "../Components/Dashboard/TransactionsDashboard/Dashboard";
import UsersDashboard from "../Components/Dashboard/UsersDashboard/Dashboard";
import CategoriesDashboard from "../Components/Dashboard/CategoriesDashboard/Dashboard";

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
      <Typography variant="button">Transacciones Admin:</Typography>
      <TransactionsDashboard data={data} />
      <Typography variant="button">Usuarios Admin:</Typography>
      <UsersDashboard data={data} />
      <Typography variant="button">Categorias Admin:</Typography>
      <CategoriesDashboard data={data} />
    </>
  );
}

export default Movimientos;
