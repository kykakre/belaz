import { connect } from "react-redux";
import CategoryProducts from "./CategoryProducts.jsx";
import {GetProducts} from "../store/slice/productSlice.js";
let mapStateToProps = (state) => {
    return {
        products:state.productReducer.products,

    };
};

const CategoryProductsContainer = connect(mapStateToProps,{GetProducts})(CategoryProducts);
export default CategoryProductsContainer;