import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../Components/Global/Footer/Footer';
import Header from '../Components/Global/Header/Header';
import WalletRouter from './WalletRouter';
import PrivateRoute from './PrivateRoute';
import AuthRouter from './AuthRouter';
import Home from '../Pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { renewUser } from '../features/auth/thunks';

function AppRouter() {
    const dispatch = useDispatch();
    const { uid } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(renewUser());
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="auth/*" element={<AuthRouter />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute isAuth={!!uid}>
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
