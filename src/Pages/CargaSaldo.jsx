import React from "react";
import LoginForm from "../Components/Formularios/LoginForm/LoginForm";
import { Container, Box, Typography, Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import SaldoForm from '../Components/Formularios/CargaSaldo/SaldoForm';

import loginWallet from "../assets/login-wallet.jpeg";

function CargaSaldo() {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        alt="phone wallet app"
        sx={{ height: "100vh" }}
        image={loginWallet}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" style={{ marginBottom: "1em" }}>
          Ingrese el monto a cargar en su cuenta
        </Typography>
        <SaldoForm />
        <Typography variant="subtitle1">
         Quiere enviarle dinero a alguien mas?
          <Button component={Link} to="/enviar-dinero" underline="none">
            Envie Dinero
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default CargaSaldo;
