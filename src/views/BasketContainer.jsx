import { connect } from "react-redux";
import Basket from "./Basket.jsx"
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
        popular:state.popularReducer.popular,
    };
};

const BasketContainer = connect(mapStateToProps)(Basket);
export default BasketContainer;