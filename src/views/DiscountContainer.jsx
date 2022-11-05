import { connect } from "react-redux";
import Discount from "./Discount.jsx";
import {GetAvailables} from "../store/slice/availableSlice.js";

let mapStateToProps = (state) => {
    return {
        availables:state.availableReducer.availables,

    };
};

const DiscountContainer = connect(mapStateToProps,{GetAvailables})(Discount);
export default DiscountContainer;