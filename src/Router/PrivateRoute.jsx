import React, { useState, useEffect } from "react";
import Login from "../Pages/Login";

const PrivateRoute = (props) => {
  // Aca debemos recibir si el user esta autenticado y luego lo guardamos en LocalStorage. Si el user no esta autenticado, te redirige a Login. Si esta autenticado, va a poder acceder a las children.

  const { isAuth, setIsAuth } = useState(null);

  useEffect(() => {
    localStorage.getItem("loginState", isAuth);
  }, []);

  return isAuth ? props.children : <Login />;
};

export default PrivateRoute;
