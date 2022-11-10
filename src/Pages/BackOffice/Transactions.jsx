import React, { useState } from "react";
import TransactionsDashboard from "../../Components/Dashboard/TransactionsDashboard/Dashboard";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 20px;
  text-align: center;
`;

function TransactionsBackoffice() {
  const [data, setData] = useState([]);

  const getTransacciones = (e) => {
    // ToDo: change to redux logic and correct endpoint
    axios.get("http://localhost:3000/transactions").then((response) => {
      setData(response.data.body);
    });
  };
  return (
    <Container>
      <Typography variant="h4">Administrar Transacciones</Typography>
      <TransactionsDashboard data={data} />
    </Container>
  );
}

export default TransactionsBackoffice;
