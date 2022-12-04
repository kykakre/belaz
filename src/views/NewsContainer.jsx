import { connect } from "react-redux";
import News from "./News.jsx";
import { GetNewsAll} from "../store/slice/newsSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
        newsLoading: state.newsReducer.isLoading
    };
};

const NewsContainer = connect(mapStateToProps,{GetNewsAll,GetSearch})(News);
export default NewsContainer;