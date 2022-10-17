import { connect } from "react-redux";
import NewsDetails from "./NewsDetails.jsx";
let mapStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
    };
};

const MainContainer = connect(mapStateToProps)(NewsDetails);
export default MainContainer;
