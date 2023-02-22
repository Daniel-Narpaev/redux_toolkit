import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthorized = true;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
