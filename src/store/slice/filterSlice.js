import { createSlice } from "@reduxjs/toolkit";
import {GetFilterProducts} from "../../api/product.js";
const initialState = {

    filter:{

    },
    isLoading: false,
    error: "",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        fetchFilter(state){
            state.isLoading = true
        },

        successFilter(state,action){
            state.filter = action.payload
            state.isLoading = false
        }

    },
});

export const GetFilter = (

) => {
    return async (dispatch) => {
        dispatch(filterSlice.actions.fetchFilter())
        const response = await GetFilterProducts();
        dispatch(filterSlice.actions.successFilter(response));
    };
};

export default filterSlice.reducer;
