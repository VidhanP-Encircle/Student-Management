import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Slices/studentSlice.js";
import authReducer from "../Slices/authSlice.js";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer,
  },
});
