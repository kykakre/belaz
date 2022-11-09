import { connect } from "react-redux";
import News from "./News.jsx";
import {GetDetail, GetNewsAll} from "../store/slice/newsSlice.js";
let mapStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
    };
};

const NewsContainer = connect(mapStateToProps,{GetNewsAll,GetDetail})(News);
export default NewsContainer;