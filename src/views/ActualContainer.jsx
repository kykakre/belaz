import { connect } from "react-redux";
import Actual from "./Actual.jsx";
import {GetActual} from "../store/slice/actualSlice.js";
let mapStateToProps = (state) => {
    return {
        actual:state.actualReducer.actual,
    };
};

const ActualContainer = connect(mapStateToProps,{GetActual})(Actual);
export default ActualContainer;