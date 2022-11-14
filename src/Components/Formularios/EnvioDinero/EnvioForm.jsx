import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Container } from "@mui/material";
import Button from "../../Button/Button";

const EnvioForm = () => {
  const validationSchema = yup.object({
    description: yup
      .string("Ingrese concepto")
      .min(5, "El concepto debe tener minimo de 5 caracteres")
      .required("Concepto es requerido"),
    amount: yup
      .number()
      .required("Debe ingresar un monto")
      .test(
        "Is positive?",
        "El monto debe ser mayor que 0",
        (value) => value > 0
      ),
    email: yup
      .string("Ingrese el email del destinatario")
      .email("El email del destinatario debe ser valido")
      .required("Email del destinatario es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
      user: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Concepto"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          style={{ marginBottom: "1em" }}
        />
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Monto"
          type="number"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
          style={{ marginBottom: "1em" }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email del destinatario"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{ marginBottom: "1em" }}
        />

        <Button text="Enviar" type="submit" />
      </form>
    </Container>
  );
};

export default EnvioForm;
