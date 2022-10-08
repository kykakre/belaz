import { connect } from "react-redux";
import LkHistory from "./LkHistory.jsx";
let mapStateToProps = (state) => {
    return {
        popular:state.popularReducer.popular,
        product:state.productReducer.product,
    };
};

const LkHistoryContainer = connect(mapStateToProps)(LkHistory);
export default LkHistoryContainer;