import { configureStore } from "@reduxjs/toolkit";
import fillerReducer from "./filler/fillerSlice";

export const store = configureStore({
    reducer: {
        filler : fillerReducer,
    },
})