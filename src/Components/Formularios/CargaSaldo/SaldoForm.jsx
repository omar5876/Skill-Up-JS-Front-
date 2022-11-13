import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Container } from '@mui/material';
import Button from '../../Button/Button';
import { useDispatch } from 'react-redux';
import { newTransaction } from '../../../features/transactions/thunks';

const SaldoForm = ({ categoryId }) => {
    const dispatch = useDispatch();
    const validationSchema = yup.object({
        description: yup
            .string('Ingrese concepto')
            .min(5, 'El concepto debe tener minimo de 5 caracteres')
            .required('Concepto es requerido'),
        amount: yup
            .number()
            .required('Debe ingresar un monto')
            .test(
                'Is positive?',
                'El monto debe ser mayor que 0',
                (value) => value > 0
            ),
    });

    const formik = useFormik({
        initialValues: {
            description: '',
            amount: '',
        },
        validationSchema: validationSchema,
        onSubmit: ({ description, amount }) => {
            dispatch(newTransaction({ description, amount, categoryId }));
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
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                    }
                    helperText={
                        formik.touched.description && formik.errors.description
                    }
                    style={{ marginBottom: '1em' }}
                />
                <TextField
                    fullWidth
                    id="amount"
                    name="amount"
                    label="Monto"
                    type="number"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.amount && Boolean(formik.errors.amount)
                    }
                    helperText={formik.touched.amount && formik.errors.amount}
                    style={{ marginBottom: '1em' }}
                />

                <Button text="Enviar" type="submit" />
            </form>
        </Container>
    );
};

export default SaldoForm;
