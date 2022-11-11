import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
        </Routes>
    );
};

export default AuthRouter;
