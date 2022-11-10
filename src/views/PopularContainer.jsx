import { connect } from "react-redux";
import Popular from "./Popular.jsx";
import {GetPopularFiltered, GetPopulars} from "../store/slice/popularSlice.js";
import {GetFilter} from "../store/slice/filterSlice.js";
let mapStateToProps = (state) => {
    return {
        populars:state.popularReducer.populars,
        filter:state.filterReducer.filter,
    };
};

const PopularContainer = connect(mapStateToProps,{GetPopulars,GetPopularFiltered,GetFilter})(Popular);
export default PopularContainer;