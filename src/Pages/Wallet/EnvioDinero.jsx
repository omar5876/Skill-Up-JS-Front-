import React from "react";
import { Box, Typography } from "@mui/material";
import EnvioForm from "../../Components/Formularios/EnvioDinero/EnvioForm";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function EnvioDinero() {
  return (
    <Container>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" style={{ marginBottom: "1em" }}>
          Realice envio de dinero
        </Typography>
        <EnvioForm />
      </Box>
    </Container>
  );
}

export default EnvioDinero;
