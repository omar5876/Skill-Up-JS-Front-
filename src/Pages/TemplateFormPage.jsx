import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function TemplateFormPage({ Form, ImageBG, isRegister }) {
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
          backgroundImage: `url(${ImageBG})`,
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
        {/* Esto debe cambiar de acuerdo al formulario */}
        <Typography variant="book1" style={{ marginBottom: "1em" }}>
          Ingrese tus datos para iniciar sesion
        </Typography>
        <Form />
        {/* Esto debe cambiar de acuerdo al formulario */}
        {isRegister ? (
          <Typography variant="book1">
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesion</Link>
          </Typography>
        ) : (
          <Typography variant="book1">
            ¿No tienes cuenta? <Link to="/register">Registrate</Link>
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default TemplateFormPage;
