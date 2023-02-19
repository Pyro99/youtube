import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    reducer : {
        sidebar : appSlice,
    }

});

export default store;