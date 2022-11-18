import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./slice/productSlice.js";
import recommendReducer from "./slice/recommendSlice.js";
import mainReducer from "./slice/mainSlice.js";
import categoryReducer from "./slice/categorySlice.js";
import popularReducer from "./slice/popularSlice.js";
import personInfoReducer from "./slice/personInfoSlice.js";
import newsReducer from "./slice/newsSlice.js";
import helpReducer from "./slice/helpSlice.js";
import orderReducer from "./slice/orderSlice.js";
import contactReducer from "./slice/contactSlice.js";
import basketReducer from "./slice/basketSlice.js";
import swiperReducer from "./slice/swiperSlice.js";
import availableReducer from "./slice/availableSlice.js";
import actualReducer from "./slice/actualSlice.js";
import newsDetailReducer from "./slice/newsDetailSlice.js";
import filterReducer from "./slice/filterSlice.js";
import feedbackReducer from "./slice/feedbackSlice.js";
import productDetailReducer from "./slice/productDetailSlice.js";
const rootReducer = combineReducers({
  productReducer,
  popularReducer,
  actualReducer,
  recommendReducer,
  availableReducer,
  mainReducer,
  categoryReducer,
  personInfoReducer,
  newsReducer,
  helpReducer,
  contactReducer,
  orderReducer,
  swiperReducer,
  basketReducer,
  newsDetailReducer,
  filterReducer,
  feedbackReducer,
  productDetailReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};
