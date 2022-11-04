import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/Linkedin";
import { Container, Box, Typography } from "@mui/material";

import styled from "@emotion/styled";

import "./Footer.css";

const StyledFooter = styled(Box)`
  width: 100vw;
  display: flex;
  color: white;
  background-color: black;
  justify-content: space-between;
  padding: 2em 0em;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Box className="footer-container-column">
        <Typography variant="book1">Copyright Wallet App</Typography>
      </Box>
      <Box className="footer-container-column">
        <a href="http://twitter.com/walletApp" target="_blank">
          <TwitterIcon style={{ color: "white" }} />
        </a>
        <a href="http://instagram.com/walletApp" target="_blank">
          <InstagramIcon style={{ color: "white" }} />
        </a>
        <a href="http://facebook.com/walletApp" target="_blank">
          <FacebookIcon style={{ color: "white" }} />
        </a>
        <a href="http://linkedin.com/walletApp" target="_blank">
          <LinkedinIcon style={{ color: "white" }} />
        </a>
      </Box>
    </StyledFooter>
  );
}

export default Footer;
