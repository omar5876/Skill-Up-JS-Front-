import React, { useState, useEffect } from 'react';
import CategoriesDashboard from '../../Components/Dashboard/CategoriesDashboard/Dashboard';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/thunks';

const Container = styled.div`
    margin: 20px;
    text-align: center;
`;

function CategoriesBackoffice() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <Container>
            <Typography variant="h4">Administrar Categorias</Typography>
            <CategoriesDashboard />
        </Container>
    );
}

export default CategoriesBackoffice;
