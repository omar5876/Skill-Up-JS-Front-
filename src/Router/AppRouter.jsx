import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Global/Footer/Footer";
import Header from "../Components/Global/Header/Header";
import WalletRouter from "./WalletRouter";
import PrivateRoute from "./PrivateRoute";
import AuthRouter from "./AuthRouter";
import Home from "../Pages/Home";
import PublicRoutes from "./PublicRoutes";

function AppRouter() {
  // Le agrego exact path auth/* para poder bloquear todo lo que vaya adelante de eso.
  const [isAuth, setIsAuth] = useState(true);
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes isAuth={isAuth}>
              <Routes>
                <Route exact path="auth/*" element={<AuthRouter />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
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
