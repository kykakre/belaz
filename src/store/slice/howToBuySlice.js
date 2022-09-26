import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   howTo:{
       howToBuy:{

       },
       howToDelivery:{},
       guarantee:{},
   },

    isLoading: false,
    error: "",
};

export const howToBuySlice = createSlice({
    name: "howToBuy",
    initialState,
    reducers: {},
});

export default howToBuySlice.reducer;
