import { connect } from "react-redux";
import Recommend from "./Recommend.jsx";
import {GetRecommends} from "../store/slice/recommendSlice.js";
let mapStateToProps = (state) => {
    return {
        recommend:state.recommendReducer.recommends,
    };
};

const RecommendContainer = connect(mapStateToProps,{GetRecommends})(Recommend);
export default RecommendContainer;