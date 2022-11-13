import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    uid: "",
    role: "",
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    startLoadingUser: (state) => {
      state.isLoading = true;
    },
    setUser: (state, action) => {
      state.isLoading = false;
      state.uid = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.role = action.payload.role;
      state.errorMessage = "";
    },
    setErrorMessage: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    logout: (state) => {
      state.role = "";
      state.uid = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.avatar = "";
      state.errorMessage = "";
      state.isLoading = false;
    },
  },
});

export const { startLoadingUser, setUser, logout, setErrorMessage } =
  authSlice.actions;
