import { connect } from "react-redux";
import CategoryProducts from "./CategoryProducts.jsx";
import {GetProducts} from "../store/slice/productSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
    return {
        products:state.productReducer.products,

    };
};

const CategoryProductsContainer = connect(mapStateToProps,{GetProducts,GetSearch})(CategoryProducts);
export default CategoryProductsContainer;