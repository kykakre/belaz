import { connect } from "react-redux";
import Main from "./Main.jsx";
let mapStateToProps = (state) => {
  return {
    banner: state.mainReducer.banner,
    benefits: state.mainReducer.benefits,
  };
};

const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;
