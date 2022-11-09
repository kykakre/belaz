import { connect } from "react-redux";
import NewsDetails from "./NewsDetails.jsx";
import {GetDetail} from "../../store/slice/newsDetailSlice.js";
let mapStateToProps = (state) => {
    return {
        detail: state.newsDetailReducer.detail,
    };
};

const NewsDetailContainer = connect(mapStateToProps,{GetDetail})(NewsDetails);
export default NewsDetailContainer;
