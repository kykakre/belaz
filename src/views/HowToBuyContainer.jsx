import { connect } from "react-redux";
import HowToBuy from "./HowToBuy.jsx";
import { GetHelp } from "../store/slice/helpSlice.js";
import { GetNewsAll } from "../store/slice/newsSlice.js";
let mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news,
    helpLoading: state.helpReducer.isLoading,
    helps: state.helpReducer.helps,
  };
};

const HowToBuyContainer = connect(mapStateToProps, { GetHelp, GetNewsAll })(
  HowToBuy
);
export default HowToBuyContainer;
