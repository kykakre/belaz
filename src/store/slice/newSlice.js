import { createSlice } from "@reduxjs/toolkit";
import {GetNewsProducts} from "../../api/product.js";
const initialState = {
    new: {
        data:[],
        pageCount:0,
    },
    isLoading: false,
    error: "",
};

export const newSlice = createSlice({
    name: "new",
    initialState,
    reducers: {
        fetchNew(state){
            state.isLoading = true;
        },
        successFetchNew(state,action){
            state.new = action.payload;
            state.isLoading = false
        },
    },
});

export const GetNew = (
    page,limit
) => {
    return async (dispatch) => {
        dispatch(newSlice.actions.fetchNew())
        const response = await GetNewsProducts(page,limit);
        dispatch(newSlice.actions.successFetchNew(response));
    };
};

export default newSlice.reducer;