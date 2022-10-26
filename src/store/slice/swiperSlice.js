import { createSlice } from "@reduxjs/toolkit";
import img from "../../assets/slide 3.png"
const initialState = {
    slide: [
        {
            id:1,
            img: img,
            text:"Компрессор для накачки шин БелАК \"Мистраль - 30\" 12V 70 л/мин",
        },
        {
            id:2,
            img: img,
            text:"Компрессор для накачки шин БелАК \"Мистраль - 30\" 12V 70 л/мин",
        },
        {
            id:3,
            img: img,
            text:"Компрессор для накачки шин БелАК \"Мистраль - 30\" 12V 70 л/мин",
        },
        {
            id:4,
            img: img,
            text:"Компрессор для накачки шин БелАК \"Мистраль - 30\" 12V 70 л/мин",
        },
        {
            id:5,
            img: img,
            text:"Компрессор для накачки шин БелАК \"Мистраль - 30\" 12V 70 л/мин",
        },
        {
            id:6,
            img: img,
            text:"Компрессор для накачки шин БелАК \"Мистраль - 30\" 12V 70 л/мин",
        },
        {
            id:7,
            img: img,
            text:"Компрессор для накачки шин БелАК \"Мистраль - 30\" 12V 70 л/мин",
        },
    ],
    isLoading: false,
    error: "",
};

export const slideSlice = createSlice({
    name: "slide",
    initialState,
    reducers: {},
});

export default slideSlice.reducer;