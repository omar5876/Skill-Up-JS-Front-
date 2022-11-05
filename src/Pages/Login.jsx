import React from "react";

import Form from "../Components/Formularios/LoginForm/FormContainer";
import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import loginWallet from "../assets/login-wallet.jpeg";

import TemplateFormPage from "./TemplateFormPage";

function Login() {
  return <TemplateFormPage Form={Form} ImageBG={loginWallet} />;
}

export default Login;
