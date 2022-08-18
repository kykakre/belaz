import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./slice/productSlice.js";
import mainReducer from "./slice/mainSlice.js";
const rootReducer = combineReducers({
    productReducer,
    mainReducer,

});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};