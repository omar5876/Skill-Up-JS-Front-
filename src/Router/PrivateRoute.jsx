import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuth }) => {
    return isAuth ? props.children : <Navigate to="auth/login" />;
};

export default PrivateRoute;
