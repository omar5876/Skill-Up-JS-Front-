import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ role, children }) => {
    return role ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
