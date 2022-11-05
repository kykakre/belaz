import { connect } from "react-redux";
import Popular from "./Popular.jsx";
import {GetPopulars} from "../store/slice/popularSlice.js";
import {AddBasket} from "../store/slice/basketSlice.js";
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
    };
};

const PopularContainer = connect(mapStateToProps,{GetPopulars,AddBasket})(Popular);
export default PopularContainer;