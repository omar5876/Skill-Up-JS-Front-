import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
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
                    <PublicRoutes role={role}>
                        <AuthRouter />
                    </PublicRoutes>
                }
            />
            <Route
                path="/admin/*"
                element={
                    <AdminRoute role={role}>
                        <AdminRouter />
                    </AdminRoute>
                }
            />
            <Route
                path="/wallet/*"
                element={
                    <PrivateRoute role={role}>
                        <WalletRouter />
                    </PrivateRoute>
                }
            />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
}

export default AppRouter;
