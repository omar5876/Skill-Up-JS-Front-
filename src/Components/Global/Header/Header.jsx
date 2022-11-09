import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Container,
  Button,
  MenuItem,
  AppBar,
} from "@mui/material";

import items from "./Items";

import { Link } from "react-router-dom";

import Logo from "../../../assets/react.svg";

console.log(items);

function Header() {
  return (
    <AppBar position="static" color="default" style={{ padding: '10px'}}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Link to="/movimientos">
              <img src={Logo} alt="Logo de la App" style={{ height: "50px" }} />
            </Link>
          </Box>
          <Box>
            {items.map((item) => {
              return (
                <Button>
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
