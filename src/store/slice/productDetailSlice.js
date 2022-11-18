import { createSlice } from "@reduxjs/toolkit";
import { GetProductDetail } from "../../api/product.js";
const initialState = {
  detail: {},
  isLoading: false,
  error: "",
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    fetchDetail(state) {
      state.isLoading = true;
    },
    successFetchDetail(state, action) {
      state.detail = action.payload;
      state.isLoading = false;
    },
  },
});

export const GetDetailProducts = (id) => {
  return async (dispatch) => {
    dispatch(productDetailSlice.actions.fetchDetail());
    const response = await GetProductDetail(page, limit);
    dispatch(productDetailSlice.actions.successFetchDetail(response));
  };
};

export default productDetailSlice.reducer;
