import { connect } from "react-redux";
import Popular from "./Popular.jsx";
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
    };
};

const PopularContainer = connect(mapStateToProps)(Popular);
export default PopularContainer;