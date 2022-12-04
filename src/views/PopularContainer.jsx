import { connect } from "react-redux";
import Popular from "./Popular.jsx";
import {GetPopularFiltered, GetPopulars} from "../store/slice/popularSlice.js";
import {GetFilter} from "../store/slice/filterSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
    return {
        populars:state.popularReducer.populars,
        popularLoading:state.popularReducer.isLoading,
        filter:state.filterReducer.filter,
    };
};

const PopularContainer = connect(mapStateToProps,{GetPopulars,GetPopularFiltered,GetFilter,GetSearch})(Popular);
export default PopularContainer;