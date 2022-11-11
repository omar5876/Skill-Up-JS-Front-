import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile";

const ContainerProfile = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography gutterBottom variant="h2" component="div">
          Mi perfil
        </Typography>
        <Profile />
      </Box>
    </>
  );
};

export default ContainerProfile;
