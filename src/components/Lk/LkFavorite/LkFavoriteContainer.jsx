import { connect } from "react-redux";
import LkFavorite from "./LkFavorite.jsx";
let mapStateToProps = (state) => {
    return {
        popular:state.popularReducer.popular,
        product:state.productReducer.product,
    };
};

const LkFavoriteContainer = connect(mapStateToProps)(LkFavorite);
export default LkFavoriteContainer;