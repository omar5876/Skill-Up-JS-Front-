import React, { useState } from "react";

import UserForm from "../Components/Formularios/UserForm/UserForm";
import LoginForm from "../Components/Formularios/LoginForm/LoginForm";

import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import loginWallet from "../assets/login-wallet.jpeg";

import TemplateFormPage from "./TemplateFormPage";

function Register() {
  const [isRegister, SetIsRegister] = useState(true);

  return (
    <Box
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
        }}
      >
        <Typography variant="book1" style={{ marginBottom: "1em" }}>
          Ingrese tus datos para registrarte como usuario
        </Typography>
        <UserForm />
        <Typography variant="book1">
          ¿Ya tienes cuenta? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
