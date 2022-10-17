import { connect } from "react-redux";
import LkDelivery from "./LkDelivery.jsx";
let mapStateToProps = (state) => {
    return {
        order:state.orderReducer.orders,
    };
};

const LkDeliveryContainer = connect(mapStateToProps)(LkDelivery);
export default LkDeliveryContainer;