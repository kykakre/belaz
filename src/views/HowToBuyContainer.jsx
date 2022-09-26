import { connect } from "react-redux";
import HowToBuy from "./HowToBuy.jsx";

let mapStateToProps = (state) => {
    return {
        news:state.newsReducer.news,

    };
};

const HowToBuyContainer = connect(mapStateToProps)(HowToBuy);
export default HowToBuyContainer;
