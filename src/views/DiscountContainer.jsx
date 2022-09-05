import { connect } from "react-redux";
import Discount from "./Discount.jsx";
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,

    };
};

const DiscountContainer = connect(mapStateToProps)(Discount);
export default DiscountContainer;