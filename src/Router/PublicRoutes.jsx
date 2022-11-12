import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ role, children }) => {
    return !role ? (
        children
    ) : role === 'ADMIN' ? (
        <Navigate to="/admin/menu" />
    ) : (
        <Navigate to="/wallet/" />
    );
};

export default PublicRoutes;
