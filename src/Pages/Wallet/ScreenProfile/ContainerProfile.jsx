import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile";

const ContainerProfile = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h5" style={{ margin: ".5em 0" }}>
          Mi perfil
        </Typography>
        <Profile />
      </Box>
    </>
  );
};

export default ContainerProfile;
