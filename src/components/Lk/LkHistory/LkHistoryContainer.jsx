import { connect } from "react-redux";
import LkHistory from "./LkHistory.jsx";
let mapStateToProps = (state) => {
    return {
        popular:state.popularReducer.popular,
    };
};

const LkHistoryContainer = connect(mapStateToProps)(LkHistory);
export default LkHistoryContainer;