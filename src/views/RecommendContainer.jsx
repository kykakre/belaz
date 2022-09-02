import { connect } from "react-redux";
import Recommend from "./Recommend.jsx";
let mapStateToProps = (state) => {
    return {

    };
};

const RecommendContainer = connect(mapStateToProps)(Recommend);
export default RecommendContainer;