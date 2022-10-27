import { connect } from "react-redux";
import BasketOrder from "./BasketOrder.jsx"
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
        popular:state.popularReducer.popular,
    };
};

const BasketOrderContainer = connect(mapStateToProps)(BasketOrder);
export default BasketOrderContainer;