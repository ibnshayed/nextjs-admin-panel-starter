import { LS } from "@/libs/ls";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";

const initialState = {
  accessToken: getCookie("accessToken") || undefined,
  refreshToken: getCookie("refreshToken") || undefined,
  user: JSON.parse(LS.get("user") || "{}"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
