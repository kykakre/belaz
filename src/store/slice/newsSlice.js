import { createSlice } from "@reduxjs/toolkit";
import {GetNews, GetNewsDetail} from "../../api/news.js";
const initialState = {
   news:[

   ],

    isLoading: false,
    error: "",
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        fetchNews(state){
            state.isLoading = true
        },
        successFetchNews(state,action){
            state.news = action.payload
            state.isLoading = false
        }
    },
});

export const GetNewsAll = (
    page,limit,year
) => {
    return async (dispatch) => {
        dispatch(newsSlice.actions.fetchNews())
        const response = await GetNews(page,limit,year);
        dispatch(newsSlice.actions.successFetchNews(response));
    };
};
export const GetDetail = (
  id
) => {
    return async (dispatch) => {
        dispatch(newsSlice.actions.fetchNews())
        const response = await GetNewsDetail(id);
        dispatch(newsSlice.actions.successFetchNews(response));
    };
};

export default newsSlice.reducer;
