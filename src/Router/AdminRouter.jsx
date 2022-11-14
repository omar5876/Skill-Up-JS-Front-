import React from "react";

import { Routes, Route } from "react-router-dom";

import Categories from "../Pages/BackOffice/Categories";
import Transactions from "../Pages/BackOffice/Transactions";
import Users from "../Pages/BackOffice/Users";
import Menu from "../Pages/BackOffice/Menu";

const AdminRouter = () => {
  return (
    <Routes>
      <Route exact path="categories" element={<Categories />} />
      <Route exact path="transactions" element={<Transactions />} />
      <Route exact path="users" element={<Users />} />
      <Route exact path="menu" element={<Menu />} />
      <Route exact path="/editar-usuario/:id" element={<Users />} />
      <Route exact path="/editar-categoria/:id" element={<Menu />} />
      <Route exact path="/editar-transaccion/:id" element={<Menu />} />
    </Routes>
  );
};

export default AdminRouter;
