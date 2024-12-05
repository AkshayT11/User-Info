import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";

const store = configureStore({
    reducer:{
        users:userSlice
    }
});

export default store;