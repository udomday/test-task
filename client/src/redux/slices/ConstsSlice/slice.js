import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollTop: 0,
  windowWidth: window.innerWidth,
  isOpenSideBar: true,
  reloadAg: true,
};

export const ConstsSlice = createSlice({
  name: "consts",
  initialState,
  reducers: {
    setScrollTop: (state, actions) => {
      state.scrollTop = actions.payload;
    },
    setWindowWidth: (state, actions) => {
      state.windowWidth = actions.payload;
    },
    setIsOpenSideBar: (state, actions) => {
      state.isOpenSideBar = actions.payload;
    },
    setReloadAg: (state) => {
      state.reloadAg = !state.reloadAg;
    },
  },
});

export const { setScrollTop, setWindowWidth, setIsOpenSideBar, setReloadAg } =
  ConstsSlice.actions;

export default ConstsSlice.reducer;
