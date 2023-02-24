import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sidebar: appSlice,
    search :searchSlice,
    chat : chatSlice,
  },
});

export default store;
