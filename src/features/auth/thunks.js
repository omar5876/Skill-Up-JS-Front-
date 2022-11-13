import axios from "axios";
import { walletApi } from "../../api/walletApi";
import { alertError, alertConfirmation } from "../../Components/Alert/Alert";

import {
  logout,
  setErrorMessage,
  setUser,
  startLoadingUser,
} from "./authSlice";

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoadingUser());
      const { data } = await walletApi.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("access_token", data.body.accessToken);
      alertConfirmation("Bienvenido", data.body.user.firstName);
      dispatch(setUser(data.body.user));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error) {
          const err = error.response.data;
          const { msg } = err;
          alertError("algo salio mal", err);
          dispatch(setErrorMessage(msg));
        }
      } else {
        alertError("Ocurrio un error inesperado");
        throw new Error("Ocurrio un error inesperado");
      }
    }
  };
};

export const renewUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await walletApi.get("/auth/renew");
      const { user, accessToken } = data.body;

      localStorage.setItem("access_token", accessToken);

      dispatch(setUser(user));
    } catch (error) {
      throw new Error("Ocurrio un error inesperado");
    }
  };
};

export const register = ({ email, password, firstName, lastName }) => {
  return async (dispatch) => {
    dispatch(startLoadingUser());
    try {
      await walletApi.post("/users/", {
        email,
        password,
        firstName,
        lastName,
      });

      dispatch(login(email, password));
    } catch (error) {
      throw new Error("Ocurrio un error inesperado");
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};
