import { connect } from "react-redux";
import Catalog from "./Catalog.jsx"
let mapStateToProps = (state) => {
    return {

    };
};

const CatalogContainer = connect(mapStateToProps)(Catalog);
export default CatalogContainer;