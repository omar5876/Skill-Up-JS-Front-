import React from "react";

import { Routes, Route } from "react-router-dom";

import Categories from "../Pages/BackOffice/Categories";
import Transactions from "../Pages/BackOffice/Transactions";
import Users from "../Pages/BackOffice/Users";
import Menu from "../Pages/BackOffice/Menu";

const AdminRouter = () => {
  // Aca mostramos solo el login y el register, hasta que el usuario se autentique

  return (
    <Routes>
      <Route exact path="categories" element={<Categories />}></Route>
      <Route exact path="transactions" element={<Transactions />}></Route>
      <Route exact path="users" element={<Users />}></Route>
      <Route exact path="menu" element={<Menu />} />
    </Routes>
  );
};

export default AdminRouter;
