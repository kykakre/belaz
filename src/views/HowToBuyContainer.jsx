import { connect } from "react-redux";
import HowToBuy from "./HowToBuy.jsx";

let mapStateToProps = (state) => {
    return {
        news:state.newsReducer.news,
        helps:state.helpReducer.helps,


    };
};

const HowToBuyContainer = connect(mapStateToProps)(HowToBuy);
export default HowToBuyContainer;
