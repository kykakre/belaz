import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {productReducer} from "./slice/productSlice.js";
import {mainPageReducer} from "./slice/mainPageSlice.js";
const rootReducer = combineReducers({
    productReducer,
    mainPageReducer,

});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};