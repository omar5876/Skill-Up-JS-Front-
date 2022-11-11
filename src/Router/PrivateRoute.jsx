import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAdminRoute }) => {
  // Aca debemos recibir si el user esta autenticado y luego lo guardamos en LocalStorage. Si el user no esta autenticado, te redirige a Login. Si esta autenticado, va a poder acceder a las children.
  //const { isLoggedIn, setIsLoggedIn } = useState(null);
  //ToDo: isLoggedIn y isAdmin proveniente de Redux
  if (!isLoggedIn) {
    //si no esta logueado, va directamente a "/" que es la url de login, hay que agregar que en el Login, si esta logueado que lo rediriga a home (admin o wallet)
    return <Navigate to={"/"} replace />;
  }
  if (isLoggedIn && isAdminRoute) {
    if (isAdmin) {
      return children;
    }
    return <Navigate to={"/wallet"} replace />;
  }
  if (isLoggedIn && !isAdminRoute) {
    if (isAdmin) {
      return <Navigate to={"/admin/menu"} replace />;
    }
    return children;
  }
};

export default PrivateRoute;
