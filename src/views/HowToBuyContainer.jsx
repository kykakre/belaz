import { connect } from "react-redux";
import HowToBuy from "./HowToBuy.jsx";
import { GetHelp } from "../store/slice/helpSlice.js";
import { GetNewsAll } from "../store/slice/newsSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news,
    helpLoading: state.helpReducer.isLoading,
    helps: state.helpReducer.helps,
  };
};

const HowToBuyContainer = connect(mapStateToProps, { GetHelp, GetNewsAll,GetSearch })(
  HowToBuy
);
export default HowToBuyContainer;
