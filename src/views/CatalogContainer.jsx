import { connect } from "react-redux";
import Catalog from "./Catalog.jsx"
import {GetPopulars} from "../store/slice/popularSlice.js";
import {GetRecommends} from "../store/slice/recommendSlice.js";
import {GetAvailables} from "../store/slice/availableSlice.js";
import {GetCategory} from "../store/slice/categorySlice.js";

let mapStateToProps = (state) => {
    return {
        populars:state.popularReducer.populars,
        recommend:state.recommendReducer.recommends,
        availables:state.availableReducer.availables,
        category:state.categoryReducer.category,
    };
};

const CatalogContainer = connect(mapStateToProps,{GetPopulars,GetRecommends,GetAvailables,GetCategory})(Catalog);
export default CatalogContainer;