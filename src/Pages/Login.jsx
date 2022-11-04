import React from "react";
import Formulario from "../Components/Formularios/Formulario";
import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import loginWallet from "../assets/login-wallet.jpeg";

function Login() {
  return (
    <Box
      className="login-page-container"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        placeContent: "center",
      }}
    >
      <Box
        style={{
          backgroundImage: `url(${loginWallet})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="book1" style={{ marginBottom: "1em" }}>
          Ingrese tus datos para iniciar sesion
        </Typography>
        <Formulario />
        <Typography variant="book1">
          No tienes cuenta?<Link to="/register">Registrate</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
