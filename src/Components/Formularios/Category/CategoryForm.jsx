import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Container } from '@mui/material';
import Button from '../../Button/Button';

const CategoryForm = () => {
    const validationSchema = yup.object({
        name: yup
            .string('Ingrese el nombre de la categoria')
            .min(
                8,
                'El nombre de la categoria debe tener minimo de 8 caracteres'
            )
            .required('El nombre de la categoria es requerido'),
        description: yup
            .string('Ingrese la descripcion')
            .min(50, 'La descripcion debe tener un minimo de 50 caracteres')
            .required('La descripcion es requerida'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
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
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    style={{ marginBottom: '1em' }}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Descripcion"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                    }
                    helperText={
                        formik.touched.description && formik.errors.description
                    }
                    style={{ marginBottom: '1em' }}
                />
                <Button text="Subir" type="submit" />
                <h1>Hola</h1>
            </form>
        </Container>
    );
};

export default CategoryForm;
