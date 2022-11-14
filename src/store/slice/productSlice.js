import { createSlice } from "@reduxjs/toolkit";
import {GetProductsAll, GetProductsCategory} from "../../api/product.js";
const initialState = {
    products:[],
    isLoading: false,
    error: "",
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts(state){
            state.isLoading = true;
        },
        successFetchProducts(state,action){
            state.products = action.payload;
            state.isLoading = false
        },
    },
});

export const GetProducts = (
    page,limit,categoryId
) => {
    return async (dispatch) => {
        dispatch(productsSlice.actions.fetchProducts())
        const response = await GetProductsCategory(page,limit,categoryId);
        dispatch(productsSlice.actions.successFetchProducts(response));
    };
};

export default productsSlice.reducer;