import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile";

export const ContainerProfile = () => {
  return (
    <>
      <Box>
        <Typography gutterBottom variant="h2" component="div">
          Mi perfil
        </Typography>
        <Profile />
      </Box>
    </>
  );
};
