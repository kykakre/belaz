import { connect } from "react-redux";
import Main from "./Main.jsx"
let mapStateToProps = (state) => {
    return {
        banner: state.mainPageReducer.banner,
    };
};

const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;