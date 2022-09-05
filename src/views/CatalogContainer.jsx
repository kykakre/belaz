import { connect } from "react-redux";
import Catalog from "./Catalog.jsx"
let mapStateToProps = (state) => {
    return {
        product:state.productReducer.product,
        category:state.categoryReducer.category,
        popular:state.popularReducer.popular,
    };
};

const CatalogContainer = connect(mapStateToProps)(Catalog);
export default CatalogContainer;