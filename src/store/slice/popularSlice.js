import { createSlice } from "@reduxjs/toolkit";
import {GetPopularsProducts} from "../../api/product.js";
const initialState = {
    populars: {
        data:[],
        pageCount:0,
    },
    isLoading: false,
    error: "",
};

export const popularSlice = createSlice({
    name: "populars",
    initialState,
    reducers: {
        fetchPopulars(state){
            state.isLoading = true;
        },
        successFetchPopulars(state,action){
            state.populars = action.payload;
            state.isLoading = false
        },
    },
});

export const GetPopulars = (
    page, limit
) => {
    return async (dispatch) => {
        dispatch(popularSlice.actions.fetchPopulars())
        const response = await GetPopularsProducts(page,limit);
        dispatch(popularSlice.actions.successFetchPopulars(response));
    };
};

export default popularSlice.reducer;