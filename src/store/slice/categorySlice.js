import { createSlice } from "@reduxjs/toolkit";
import category from "../../assets/category.svg"
const initialState = {
   category:[
       {
           id:1,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:2,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:3,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:4,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:5,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:6,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:7,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:8,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:9,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
       {
           id:10,
           img:category,
           title:"Домкраты",
           description:"Многократный лауреат премии Автокомпонент года и лауреат премии Автоаксессуар года...",
       },
   ],
    isLoading: false,
    error: "",
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
});

export default categorySlice.reducer;