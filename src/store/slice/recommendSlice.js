import { createSlice } from "@reduxjs/toolkit";
import {GetRecommendsProducts} from "../../api/product.js";
const initialState = {
    recommend: {
        data:[],
        pageCount:0,
    },
    isLoading: false,
    error: "",
};

export const recommendSlice = createSlice({
    name: "recommends",
    initialState,
    reducers: {
        fetchRecommends(state){
            state.isLoading = true;
        },
        successFetchRecommend(state,action){
            state.recommends = action.payload;
            state.isLoading = false
        },
    },
});

export const GetRecommends = (
    page,limit
) => {
    return async (dispatch) => {
        dispatch(recommendSlice.actions.fetchRecommends())
        const response = await GetRecommendsProducts(page,limit);
        dispatch(recommendSlice.actions.successFetchRecommend(response));
    };
};

export default recommendSlice.reducer;