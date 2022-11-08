import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import CargaSaldo from "../Pages/CargaSaldo";
import Movimientos from "../Pages/Movimientos";
import Balance from "../Pages/Balance";
import EnvioDinero from "../Pages/EnvioDinero";
import Footer from "../Components/Global/Footer/Footer";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="movimientos" element={<Movimientos />} />{" "}
        <Route path="cargar-saldo" element={<CargaSaldo />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/enviar-dinero" element={<EnvioDinero />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
