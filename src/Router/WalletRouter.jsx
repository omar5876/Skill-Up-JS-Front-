import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CargaSaldo from '../Pages/Wallet/CargaSaldo';
import Movimientos from '../Pages/Wallet/Movimientos';
import Balance from '../Pages/Wallet/Balance';
import EnvioDinero from '../Pages/Wallet/EnvioDinero';

function WalletRouter() {
    return (
        <Routes>
            <Route path="movimientos" element={<Movimientos />} />{' '}
            <Route path="cargar-saldo" element={<CargaSaldo />} />
            <Route path="balance" element={<Balance />} />
            <Route path="enviar-dinero" element={<EnvioDinero />} />
            <Route path="*" element={<Navigate to="balance" />} />
        </Routes>
    );
}

export default WalletRouter;
