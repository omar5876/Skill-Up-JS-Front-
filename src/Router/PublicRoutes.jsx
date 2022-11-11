import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ isAuth, children }) => {
    return !isAuth ? children : <Navigate to="/wallet/" />;
};

export default PublicRoutes;
