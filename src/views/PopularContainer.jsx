import { connect } from "react-redux";
import Popular from "./Popular.jsx";
import {GetPopulars} from "../store/slice/popularSlice.js";
import {AddBasket} from "../store/slice/basketSlice.js";
let mapStateToProps = (state) => {
    return {
        populars:state.popularReducer.populars,
    };
};

const PopularContainer = connect(mapStateToProps,{GetPopulars})(Popular);
export default PopularContainer;