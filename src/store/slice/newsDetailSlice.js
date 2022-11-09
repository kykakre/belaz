import { createSlice } from "@reduxjs/toolkit";
import {GetNewsDetail} from "../../api/news.js";
const initialState = {

    detail:{
        id:1,
    },
    isLoading: false,
    error: "",
};

export const newsDetailSlice = createSlice({
    name: "newsDetail",
    initialState,
    reducers: {
        fetchNewsDetail(state){
            state.isLoading = true
        },

        successFetchDetail(state,action){
            state.detail = action.payload
            state.isLoading = false
        }

    },
});

export const GetDetail = (
    id
) => {
    return async (dispatch) => {
        dispatch(newsDetailSlice.actions.fetchNewsDetail())
        const response = await GetNewsDetail(id);
        dispatch(newsDetailSlice.actions.successFetchDetail(response));
    };
};

export default newsDetailSlice.reducer;
