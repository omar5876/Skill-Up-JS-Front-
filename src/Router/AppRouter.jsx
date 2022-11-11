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
import AdminRoute from './AdminRoute';
import AdminRouter from './AdminRouter';

function AppRouter() {
    const dispatch = useDispatch();
    const { uid, role } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(renewUser());
    }, [dispatch]);

    return (
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
                path="/admin/*"
                element={
                    <AdminRoute isAdmin={role}>
                        <AdminRouter />
                    </AdminRoute>
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
    );
}

export default AppRouter;
