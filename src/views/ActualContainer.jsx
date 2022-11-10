import { connect } from "react-redux";
import Actual from "./Actual.jsx";
import {GetActual, GetActualFiltered} from "../store/slice/actualSlice.js";
import {GetFilter} from "../store/slice/filterSlice.js";
let mapStateToProps = (state) => {
    return {
        actual:state.actualReducer.actual,
        filter:state.filterReducer.filter,
    };
};

const ActualContainer = connect(mapStateToProps,{GetActual,GetFilter,GetActualFiltered})(Actual);
export default ActualContainer;