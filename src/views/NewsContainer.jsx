import { connect } from "react-redux";
import News from "./News.jsx";
let mapStateToProps = (state) => {
    return {

    };
};

const NewsContainer = connect(mapStateToProps)(News);
export default NewsContainer;