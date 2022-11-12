import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ role, children }) => {
    return role === 'ADMIN' ? children : <Navigate to="/wallet/" />;
};

export default AdminRoute;
