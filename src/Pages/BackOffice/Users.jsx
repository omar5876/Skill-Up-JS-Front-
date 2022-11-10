import React, { useState } from "react";
import UsersDashboard from "../../Components/Dashboard/UsersDashboard/Dashboard";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 20px;
  text-align: center;
`;

function UsersBackoffice() {
  const [data, setData] = useState([]);

  const getTransacciones = (e) => {
    // ToDo: change to redux logic and correct endpoint
    axios.get("http://localhost:3000/usuarios").then((response) => {
      setData(response.data.body);
    });
  };
  return (
    <Container>
      <Typography variant="h4">Administrar Usuarios</Typography>
      <UsersDashboard data={data} />
    </Container>
  );
}

export default UsersBackoffice;
