import React, { useContext, useState, useEffect } from "react";

import { Button, TableFooter, TableCell, TableRow } from "@mui/material";

import TableCard from "./TableRow.jsx";

function Dashboard({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <TableCard item={item} key={index} />
      ))}
      <TableRow>
        <TableCell>Total:</TableCell>
        <TableCell align="right">Suma del total</TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    </>
  );
}

export default Dashboard;
