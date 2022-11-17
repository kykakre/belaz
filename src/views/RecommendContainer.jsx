import { connect } from "react-redux";
import Recommend from "./Recommend.jsx";
import {
  GetRecommendFiltered,
  GetRecommends,
} from "../store/slice/recommendSlice.js";
import { GetFilter } from "../store/slice/filterSlice.js";
let mapStateToProps = (state) => {
  return {
    recommend: state.recommendReducer.recommends,
    recommendLoading: state.recommendReducer.isLoading,
    filter: state.filterReducer.filter,
  };
};

const RecommendContainer = connect(mapStateToProps, {
  GetRecommends,
  GetRecommendFiltered,
  GetFilter,
})(Recommend);
export default RecommendContainer;
