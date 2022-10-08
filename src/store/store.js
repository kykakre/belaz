import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./slice/productSlice.js";
import mainReducer from "./slice/mainSlice.js";
import categoryReducer from "./slice/categorySlice.js";
import popularReducer from "./slice/popularSlice.js";
import personInfoReducer from "./slice/personInfoSlice.js";
import newsReducer from "./slice/newsSlice.js";
import helpReducer from "./slice/helpSlice.js"
import contactReducer from "./slice/contactSlice.js";
const rootReducer = combineReducers({
    productReducer,
    mainReducer,
    categoryReducer,
    popularReducer,
    personInfoReducer,
    newsReducer,
    helpReducer,
    contactReducer,

});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};