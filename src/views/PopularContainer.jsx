import { connect } from "react-redux";
import Popular from "./Popular.jsx";
import {GetPopulars} from "../store/slice/popularSlice.js";
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
    };
};

const PopularContainer = connect(mapStateToProps,{GetPopulars})(Popular);
export default PopularContainer;