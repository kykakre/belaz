import { connect } from "react-redux";
import Products from "./Products.jsx";
import { GetProducts } from "../store/slice/productSlice.js";
import { GetFilter } from "../store/slice/filterSlice.js";
let mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    productsLoader: state.productReducer.isLoading,
    filter: state.filterReducer.filter,
  };
};

const ProductsContainer = connect(mapStateToProps, { GetProducts, GetFilter })(
  Products
);
export default ProductsContainer;
