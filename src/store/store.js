import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./slice/productSlice.js";
import mainReducer from "./slice/mainSlice.js";
import categoryReducer from "./slice/categorySlice.js"
const rootReducer = combineReducers({
    productReducer,
    mainReducer,
    categoryReducer,

});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};