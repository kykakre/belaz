import { connect } from "react-redux";
import Actual from "./Actual.jsx";
import {GetActual} from "../store/slice/actualSlice.js";
import {GetFilter} from "../store/slice/filterSlice.js";
import {GetAvailablesFiltered} from "../store/slice/availableSlice.js";
let mapStateToProps = (state) => {
    return {
        actual:state.actualReducer.actual,
        filter:state.filterReducer.filter,
    };
};

const ActualContainer = connect(mapStateToProps,{GetActual,GetFilter,GetAvailablesFiltered})(Actual);
export default ActualContainer;