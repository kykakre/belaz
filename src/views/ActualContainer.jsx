import { connect } from "react-redux";
import Actual from "./Actual.jsx";
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
    };
};

const ActualContainer = connect(mapStateToProps)(Actual);
export default ActualContainer;