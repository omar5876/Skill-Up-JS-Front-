import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { TextField, Button, Typography, Container } from "@mui/material";

function Form({ formik, validationSchema }) {
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Ingresa
        </Button>
      </form>
    </Container>
  );
}

export default Form;
