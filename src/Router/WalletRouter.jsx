import React from "react";
import { Routes, Route } from "react-router-dom";
import CargaSaldo from "../Pages/Wallet/CargaSaldo";
import Movimientos from "../Pages/Wallet/Movimientos";
import Balance from "../Pages/Wallet/Balance";
import EnvioDinero from "../Pages/Wallet/EnvioDinero";
import Home from "../Pages/Wallet/Home";
import ContainerProfile from "../Pages/Wallet/ScreenProfile/ContainerProfile";

function WalletRouter() {
  // Aca debemos recibir el user y el role

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="movimientos" element={<Movimientos />} />
      <Route path="cargar-saldo" element={<CargaSaldo />} />
      <Route path="balance" element={<Balance />} />
      <Route
      // isAuth={user && & user.role.includes("admin")}
      >
        <Route path="enviar-dinero" element={<EnvioDinero />} />
        <Route path="mi-perfil" element={<ContainerProfile />} />
        <Route path="enviar-dinero" element={<EnvioDinero />} />
      </Route>
    </Routes>
  );
}

export default WalletRouter;
