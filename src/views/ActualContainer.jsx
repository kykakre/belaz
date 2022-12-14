import { connect } from "react-redux";
import Actual from "./Actual.jsx";
import {GetActual, GetActualFiltered} from "../store/slice/actualSlice.js";
import {GetFilter} from "../store/slice/filterSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
    return {
        actual:state.actualReducer.actual,
        actualLoading:state.actualReducer.isLoading,
        filter:state.filterReducer.filter,
    };
};

const ActualContainer = connect(mapStateToProps,{GetActual,GetFilter,GetActualFiltered,GetSearch})(Actual);
export default ActualContainer;