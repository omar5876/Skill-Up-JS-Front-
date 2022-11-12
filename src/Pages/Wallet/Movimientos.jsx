import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import axios from "axios";
import styled from "@emotion/styled";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ListItemText from "@mui/material/ListItemText";

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  margin: auto;
  margin-top: 15px;
  flex-direction: column;
`;

const StyledList = styled(List)`
  width: 100%;
  background: white;
  color: black;
  border-radius: 5px;
  font-size: 2rem;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

function Movimientos() {
  const [data, setData] = useState([]);

  const getTransacciones = (e) => {
    axios.get("http://localhost:3000/transactions").then((response) => {
      setData(response.data.body);
    });
  };

  useEffect(() => {
    getTransacciones(), filterIngresos();
  }, []);

  const [ingresos, setIngresos] = useState([]);
  const filterIngresos = () => {
    const listado = data.filter((ingreso) => ingreso.categoryId === 11);
    setIngresos(listado);
    //console.log(ingresos);
    return listado;
  };

  return (
    <>
      <StyledBox>
        <Typography variant="button">Movimientos</Typography>
        <StyledList>
          {data?.map((transaction) => (
            <ListItem
              key={transaction.id}
              sx={{
                height: "50px",
                "&:hover": {
                  bgcolor: "lightGray",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  {transaction.categoryId === 11 ? (
                    <AddOutlinedIcon color="primary" />
                  ) : (
                    <RemoveOutlinedIcon color="primary" />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={"$ " + transaction.amount}
                secondary={transaction.date}
              />
              <ListItemText primary={"Random desc"} />
            </ListItem>
          ))}
        </StyledList>
      </StyledBox>
    </>
  );
}

export default Movimientos;
