import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../Components/Global/Footer/Footer';
import Header from '../Components/Global/Header/Header';
import WalletRouter from './WalletRouter';
import PrivateRoute from './PrivateRoute';
import AuthRouter from './AuthRouter';
import Home from '../Pages/Home';
import { useSelector } from 'react-redux';

function AppRouter() {
    const { id } = useSelector((state) => state.auth.user);

    // Le agrego exact path auth/* para poder bloquear todo lo que vaya adelante de eso.

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="auth/*" element={<AuthRouter />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute isAuth={!!id}>
                            <WalletRouter />
                        </PrivateRoute>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRouter;
