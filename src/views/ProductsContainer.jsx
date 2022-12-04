import { connect } from "react-redux";
import Products from "./Products.jsx";
import { GetProducts } from "../store/slice/productSlice.js";
import { GetFilter } from "../store/slice/filterSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    productsLoader: state.productReducer.isLoading,
    filter: state.filterReducer.filter,
  };
};

const ProductsContainer = connect(mapStateToProps, { GetProducts, GetFilter,GetSearch })(
  Products
);
export default ProductsContainer;
