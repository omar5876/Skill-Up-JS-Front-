import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Container } from "@mui/material";
import Button from "../../Button/Button";

import { Link, useParams } from "react-router-dom";

const EditarSaldo = () => {
  const validationSchema = yup.object({
    description: yup
      .string("Ingrese concepto")
      .min(5, "El concepto debe tener minimo de 5 caracteres")
      .required("Concepto es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
    },
    validationSchema: validationSchema,

    // En el onsubmit debemos recuperar los valores anteriores que tenia el elemento.
    // Pasar el id en el handleSubmit(id.id, form)
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Todas las transacciones que vienen por Redux
  const [Transactions, setTransactions] = useState([]);

  function deleteSaldo(id) {
    Axios.delete(`http://localhost:3000/transactions/${id}`, {}).then(
      (response) => {
        const nuevaLista = Transactions.filter((item) => item.id !== id);
        setTransactions(nuevaLista);
      }
    );
  }


  const updateFactura = (id, form) => {
    const concepto = form.concepto;
    Axios.put(`http://localhost:3000/transactions/${id}`, {
      concepto: concepto,
      id: id,
    }).then((response) => {
      console.log("Transaccion editada");
    });
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Concepto"
          // Aca debemos mostrar el valor anterior, si form seria el objeto que lo contiene 
        //   value={form.monto}
        //   onChange={(e) =>
        //     setForm({ ...form, [e.target.name]: e.target.value })
        //   }
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          style={{ marginBottom: "1em" }}
        />

        <Button text="Editar" type="submit" />
        <Button>
          <Link to={`/transactions/`} onClick={onPressEdit}>
            Volver a transacciones
          </Link>
        </Button>
      </form>
    </Container>
  );
};

export default EditarSaldo;
