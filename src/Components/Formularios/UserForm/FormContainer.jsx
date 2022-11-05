import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Form from "./Form";

const FormContainer = () => {
  const validationSchema = yup.object({
    firstName: yup
      .string("Ingrese su nombre")
      .min(5, "Tu nombre debe tener minimo de 5 caracteres")
      .required("Tu nombre es requerido"),
    lastName: yup
      .string("Ingrese su apellido")
      .min(5, "Tu apellido deben tene minimo de 5 caracteres")
      .required("Tu apelldio es requerido"),
    avatar: yup
      .string("Ingrese su imagen de perfil")
      .email("Ingrese un imagen de perfil")
      .required("imagen de perfil es requerido"),
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
      firstName: "",
      lastName: "",
      email: "",
      avatar: "",
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
