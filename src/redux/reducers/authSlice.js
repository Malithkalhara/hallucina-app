import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  isLogged: false,
  email: null,
  accessToken: null,
  refreshToken: null,
  firstName: null,
  lastName: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action", action);
      state.id = action.payload.id;
      state.isLogged = true;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.id = null;
      state.isLogged = false;
      state.email = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.firstName = null;
      state.lastName = null;
      state.role = null;
    },
  },
});

export const selectIsLogged = (state) => state.auth.isLogged;
export const getUser = (state) => state.auth;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
