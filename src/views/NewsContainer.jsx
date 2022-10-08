import { connect } from "react-redux";
import News from "./News.jsx";
let mapStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
    };
};

const NewsContainer = connect(mapStateToProps)(News);
export default NewsContainer;