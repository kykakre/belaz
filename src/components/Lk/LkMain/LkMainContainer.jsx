import { connect } from "react-redux";
import LkMain from "./LkMain.jsx";
let mapStateToProps = (state) => {

    return {
        slide:state.swiperReducer.slide,
        order:state.orderReducer.orders,
    };
};

const LkMainContainer = connect(mapStateToProps)(LkMain);
export default LkMainContainer;