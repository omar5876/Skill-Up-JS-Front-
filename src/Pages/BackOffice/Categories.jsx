import React, { useState, useEffect } from "react";
import CategoriesDashboard from "../../Components/Dashboard/CategoriesDashboard/Dashboard";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 20px;
  text-align: center;
`;

function CategoriesBackoffice() {
  const [data, setData] = useState([]);

  const getTransacciones = (e) => {
    // ToDo: change to redux logic and correct endpoint
    axios.get("http://localhost:3000/categories").then((response) => {
      setData(response.data.body);
    });
  };
  return (
    <Container>
      <Typography variant="h4">Administrar Categorias</Typography>
      <CategoriesDashboard data={data} />
    </Container>
  );
}

export default CategoriesBackoffice;
