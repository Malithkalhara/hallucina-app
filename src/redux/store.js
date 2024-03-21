import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import homeViewSlice from "./reducers/homeViewSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    homeView: homeViewSlice,
  },
});
