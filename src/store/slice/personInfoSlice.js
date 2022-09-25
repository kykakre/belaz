import { createSlice } from "@reduxjs/toolkit";
import avatar from "../../assets/avatar.png"
const initialState = {
    personInfo:{
      name:"Егор",
      surname:"Балашов",
      avatar:avatar,

    },
    isLoading: false,
    error: "",
};

export const personInfo = createSlice({
    name: "personInfo",
    initialState,
    reducers: {},
});

export default personInfo.reducer;
