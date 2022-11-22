import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import { GetDetailProducts } from "../store/slice/productDetailSlice.js";
import { GetRecommends } from "../store/slice/recommendSlice.js";
let mapStateToProps = (state) => {
  return {
    detail: state.productDetailReducer.detail,
    recommend: state.recommendReducer.recommends,
    detailLoading: state.productDetailReducer.isLoading,
  };
};

const ProductDetailContainer = connect(mapStateToProps, {
  GetDetailProducts,
  GetRecommends,
})(ProductDetail);
export default ProductDetailContainer;
