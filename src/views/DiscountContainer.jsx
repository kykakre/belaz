import { connect } from "react-redux";
import Discount from "./Discount.jsx";
import {GetAvailables, GetAvailablesFiltered} from "../store/slice/availableSlice.js";
import {GetFilter} from "../store/slice/filterSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";

let mapStateToProps = (state) => {
    return {
        availables:state.availableReducer.availables,
        filter:state.filterReducer.filter,
        availablesLoading:state.availableReducer.isLoading,

    };
};

const DiscountContainer = connect(mapStateToProps,{GetAvailables,GetAvailablesFiltered,GetFilter,GetSearch})(Discount);
export default DiscountContainer;