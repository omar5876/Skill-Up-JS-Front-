import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Container,
  Button as MUIButton,
  IconButton,
  AppBar,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import items from "./Items";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../Button/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Header() {
  const [toggle, toggleDrawer] = useState(false);

  return (
    <>
      <AppBar position="static" color="default" style={{ padding: "10px" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleDrawer(true)}
              sx={{ ml: 2, display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              variant="temporary"
              open={toggle}
              onClose={() => toggleDrawer(false)}
              onOpen={() => toggleDrawer(true)}
            >
              <Box
                sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#dbc8ff",
                }}
              >
                <IconButton sx={{ mb: 2 }}>
                  <CloseIcon onClick={() => toggleDrawer(false)} />
                </IconButton>

                <Divider sx={{ mb: 2 }} />
                <Box sx={{ mb: 2 }}>
                  {items.map((item, index) => {
                    return (
                      item.responsive !== "no" && (
                        <ListItemButton key={index}>
                          <ListItemIcon>
                            <FiberManualRecordIcon />
                          </ListItemIcon>
                          <ListItemText>
                            <MUIButton
                              color="secondary"
                              onClick={() => toggleDrawer(false)}
                            >
                              <Link
                                to={item.path}
                                style={{ textDecoration: "none" }}
                              >
                                {item.name}
                              </Link>
                            </MUIButton>
                          </ListItemText>
                        </ListItemButton>
                      )
                    );
                  })}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  {/*ToDo: set logout logic  */}
                  <Button text="Salir"></Button>
                </Box>
              </Box>
            </Drawer>
            <Box>
              <Link to="/wallet">
                <AccountBalanceIcon fontSize="large" />
              </Link>
            </Box>
            <Box sx={{ mr: 2, display: { xs: "none", md: "block" } }}>
              {items.map((item, index) => {
                return (
                  <MUIButton color="secondary" key={index}>
                    <Link to={item.path} style={{ textDecoration: "none" }}>
                      {item.name}
                    </Link>
                  </MUIButton>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
