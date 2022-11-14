import { connect } from "react-redux";
import NewsDetails from "./NewsDetails.jsx";
import {GetDetail} from "../../store/slice/newsDetailSlice.js";
let mapStateToProps = (state) => {
    return {
        detail: state.newsDetailReducer.detail,
        detailLoading:state.newsDetailReducer.isLoading,
    };
};

const NewsDetailContainer = connect(mapStateToProps,{GetDetail})(NewsDetails);
export default NewsDetailContainer;
