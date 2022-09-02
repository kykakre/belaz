import { connect } from "react-redux";
import Popular from "./Popular.jsx";
let mapStateToProps = (state) => {
    return {

    };
};

const PopularContainer = connect(mapStateToProps)(Popular);
export default PopularContainer;