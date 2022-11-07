import React from "react";

import LoginForm from "../Components/Formularios/LoginForm/LoginForm";
import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import loginWallet from "../assets/login-wallet.jpeg";

import TemplateFormPage from "./TemplateFormPage";

function Login() {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
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
        }}
      >
        <Typography variant="book1" style={{ marginBottom: "1em" }}>
          Ingrese tus datos para iniciar sesion
        </Typography>
        <LoginForm />
        <Typography variant="book1">
          ¿No tienes cuenta? <Link to="/register">Registrate</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
