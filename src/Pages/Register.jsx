import React, { useState } from "react";

import Form from "../Components/Formularios/UserForm/FormContainer";
import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import loginWallet from "../assets/login-wallet.jpeg";

import TemplateFormPage from "./TemplateFormPage";

function Register() {
  const [isRegister, SetIsRegister] = useState(true);

  return (
    <TemplateFormPage
      Form={Form}
      ImageBG={loginWallet}
      isRegister={isRegister}
    />
  );
}

export default Register;
