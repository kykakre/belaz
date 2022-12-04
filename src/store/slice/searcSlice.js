import { createSlice } from "@reduxjs/toolkit";
import {GetSeacrhProducts} from "../../api/product.js";
const initialState = {
    search:[],
    isLoading: false,
    error: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        fetchProducts(state){
            state.isLoading = true;
        },
        successFetchProducts(state,action){
            state.search = action.payload;
            state.isLoading = false
        },
    },
});

export const GetSearch = (
    page,limit,name
) => {
    return async (dispatch) => {
        dispatch(searchSlice.actions.fetchProducts())
        const response = await GetSeacrhProducts(page,limit,name);
        dispatch(searchSlice.actions.successFetchProducts(response));
    };
};

export default searchSlice.reducer;