import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isAdmin, children }) => {
    return isAdmin ? children : <Navigate to="/balance" />;
};

export default AdminRoute;
