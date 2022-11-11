import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../Components/Global/Footer/Footer';
import Header from '../Components/Global/Header/Header';
import WalletRouter from './WalletRouter';
import PublicRoutes from './PublicRoutes';
import PrivateRoute from './PrivateRoute';
import AuthRouter from './AuthRouter';
import { useDispatch, useSelector } from 'react-redux';
import { renewUser } from '../features/auth/thunks';

function AppRouter() {
    const dispatch = useDispatch();
    const { uid } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(renewUser());
    }, [dispatch]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/auth/*"
                    element={
                        <PublicRoutes isAuth={!!uid}>
                            <AuthRouter />
                        </PublicRoutes>
                    }
                />
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
