import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sidebar: appSlice,
    search :searchSlice,
  },
});

export default store;
