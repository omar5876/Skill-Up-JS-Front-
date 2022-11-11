import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import CargaSaldo from '../Pages/CargaSaldo';
import Movimientos from '../Pages/Movimientos';
import Balance from '../Pages/Balance';
import EnvioDinero from '../Pages/EnvioDinero';
import Footer from '../Components/Global/Footer/Footer';
import Header from '../Components/Global/Header/Header';

function WalletRouter() {
    return (
        <Routes>
            <Route path="movimientos" element={<Movimientos />} />{' '}
            <Route path="cargar-saldo" element={<CargaSaldo />} />
            <Route path="balance" element={<Balance />} />
            <Route
            // isAuth={user && & user.role.includes("admin")}
            >
                <Route path="enviar-dinero" element={<EnvioDinero />} />
            </Route>
        </Routes>
    );
}

export default WalletRouter;
