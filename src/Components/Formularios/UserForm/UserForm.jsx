import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Container } from "@mui/material";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { register as registerUser } from "../../../features/auth/thunks";
import { editUser } from "../../../features/users/thunks";
import { useSelector } from "react-redux";

const UserForm = ({ register, onClose }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, password } = useSelector(
    (state) => state.auth
  );
  const validationSchema = yup.object({
    firstName: yup
      .string("Ingrese su nombre")
      .min(5, "Tu nombre debe tener minimo de 5 caracteres")
      .required("Tu nombre es requerido"),
    lastName: yup
      .string("Ingrese su apellido")
      .min(5, "Tu apellido deben tene minimo de 5 caracteres")
      .required("Tu apellido es requerido"),
    email: yup
      .string("Ingrese su email")
      .email("Ingrese un email valido")
      .required("Email es requerido"),
    password: yup
      .string("Ingrese su nombre contraseña")
      .min(8, "Las contraseña deben tener minimo de 8 caracteres")
      .required("Contraseña es requerido"),
  });
  let formik;
  if (register) {
    formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        dispatch(registerUser(values));
      },
    });
  } else {
    formik = useFormik({
      initialValues: {
        firstName,
        lastName,
        email,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log("aaa");
        dispatch(editUser(values));
      },
    });
  }
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
          id="firstName"
          name="firstName"
          label="Nombre"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          style={{ marginBottom: "1em" }}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Apellido"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          style={{ marginBottom: "1em" }}
        />
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
        {register && (
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
        )}
        {register && <Button text="Registrarse" type="submit" />}
        {!register && (
          <div style={{ display: "flex", gap: "5px" }}>
            <Button onClick={onClose} text="Cancelar" />
            <Button type="submit" text="Guardar" />
          </div>
        )}
      </form>
    </Container>
  );
};

export default UserForm;
