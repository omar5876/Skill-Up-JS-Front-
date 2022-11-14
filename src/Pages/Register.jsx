import React from "react";

import UserForm from "../Components/Formularios/UserForm/UserForm";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import loginWallet from "../assets/login-wallet.jpeg";

function Register() {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        placeContent: "center",
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
          Ingrese sus datos para registrarse como usuario
        </Typography>
        <UserForm register />
        <Typography variant="subtitle1">
          ¿Ya tienes cuenta?
          <Button component={Link} to="/auth/login" underline="none">
            Login
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default Register;
