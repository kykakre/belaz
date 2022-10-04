import { connect } from "react-redux";
import Recommend from "./Recommend.jsx";
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
    };
};

const RecommendContainer = connect(mapStateToProps)(Recommend);
export default RecommendContainer;