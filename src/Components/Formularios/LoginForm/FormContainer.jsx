import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Form from "./Form";

const FormContainer = () => {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return <Form validationSchema={validationSchema} formik={formik} />;
};

export default FormContainer;
