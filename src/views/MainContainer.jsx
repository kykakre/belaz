import { connect } from "react-redux";
import Main from "./Main.jsx";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
  return {
    banner: state.mainReducer.banner,
    benefits: state.mainReducer.benefits,
  };
};

const MainContainer = connect(mapStateToProps,{GetSearch})(Main);
export default MainContainer;
