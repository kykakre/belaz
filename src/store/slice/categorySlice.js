import { createSlice } from "@reduxjs/toolkit";
import {GetCategoryProducts} from "../../api/category.js";
const initialState = {
   category:[

   ],
    isLoading: false,
    error: "",
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        fetchCategory(state){
            state.isLoading = true
        },
        successFetchCategory(state,action){
            state.category = action.payload
            state.isLoading = false
        }
    },
});

export const GetCategory = (
    page, limit
) => {
    return async (dispatch) => {
        dispatch(categorySlice.actions.fetchCategory())
        const response = await GetCategoryProducts(page,limit);
        dispatch(categorySlice.actions.successFetchCategory(response));
    };
};

export default categorySlice.reducer;