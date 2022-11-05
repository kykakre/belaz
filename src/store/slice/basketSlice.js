import { createSlice } from "@reduxjs/toolkit";
import product from "../../assets/product.svg";
import {GetPopularsProducts} from "../../api/product.js";
import {AddProductsBasket, AllProductsBasket, DeleteProductsBasket} from "../../api/basket.js";
const initialState = {
    products: [


    ],
    isLoading: false,
    error: "",
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        fetchProducts(state){
            state.isLoading = true
        },
        successFetchProducts(state,action){
            state.products = action.payload;
            state.isLoading = false;
        },

    },
});


export const AddBasket = (
    productId
) => {
    return async (dispatch) => {
        dispatch(populartSlice.actions.fetchProducts())
        const response = await AddProductsBasket(productId);
        dispatch(populartSlice.actions.successFetchProducts(response));
    };
};
export const DeleteBasket = (
    productId
) => {
    return async (dispatch) => {
        dispatch(populartSlice.actions.fetchProducts())
        const response = await DeleteProductsBasket(productId);
        dispatch(populartSlice.actions.successFetchProducts(response));
    };
};
export const AllBasket = (

) => {
    return async (dispatch) => {
        dispatch(populartSlice.actions.fetchProducts())
        const response = await AllProductsBasket();
        dispatch(populartSlice.actions.successFetchProducts(response));
    };
};



export default basketSlice.reducer;