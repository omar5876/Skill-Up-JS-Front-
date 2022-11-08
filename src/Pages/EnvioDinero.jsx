import React from "react";
import LoginForm from "../Components/Formularios/LoginForm/LoginForm";
import { Container, Box, Typography, Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import EnvioForm from "../Components/Formularios/EnvioDinero/EnvioForm";

import loginWallet from "../assets/login-wallet.jpeg";

function EnvioDinero() {
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
          Ingrese el monto a enviarle a un amigo
        </Typography>
        <EnvioForm />
        <Typography variant="subtitle1">
          Quiere cargar saldo en su cuenta?
          <Button component={Link} to="/cargar-saldo" underline="none">
            Cargar Saldo
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default EnvioDinero;
