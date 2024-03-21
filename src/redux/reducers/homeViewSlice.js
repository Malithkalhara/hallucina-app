import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeView: false,
};

const homeViewSlice = createSlice({
  name: "homeView",
  initialState,
  reducers: {
    updateIsHome: (state, { payload: { homeView } }) => {
      state.homeView = homeView;
    },
  },
});

export const getIsHome = (state) => state.homeView;

export const { updateIsHome } = homeViewSlice.actions;
export default homeViewSlice.reducer;
