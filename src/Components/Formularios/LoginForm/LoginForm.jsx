import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Container } from "@mui/material";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/thunks";

const FormContainer = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    email: yup
      .string("Ingrese su email")
      .email("Ingrese un email valido")
      .required("Email es requerido"),
    password: yup
      .string("Ingrese su nombre contraseña")
      .min(8, "Las contraseña deben tener minimo de 8 caracteres")
      .required("Contraseña es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }) => {
      dispatch(login(email, password));
    },
  });

  return (
    <Container>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{ marginBottom: "1em" }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{ marginBottom: "1em" }}
        />
        <Button text="Ingresar" type="submit" />
      </form>
    </Container>
  );
};

export default FormContainer;
