import { createSlice } from "@reduxjs/toolkit";
import {GetAvailablesProducts} from "../../api/product.js";
const initialState = {
    availables: [


    ],
    isLoading: false,
    error: "",
};

export const availableSlice = createSlice({
    name: "availables",
    initialState,
    reducers: {
        fetchAvailables(state){
            state.isLoading = true
        },
        successFetchAvailables(state,action){
            state.availables = action.payload
            state.isLoading = false
        }
    },
});


export const GetAvailables = (
    page,limit
) => {
    return async (dispatch) => {
        dispatch(availableSlice.actions.fetchAvailables())
        const response = await GetAvailablesProducts(page,limit);
        dispatch(availableSlice.actions.successFetchAvailables(response));
        console.log("avali",response)
    };
};


export default availableSlice.reducer;