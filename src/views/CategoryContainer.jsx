import { connect } from "react-redux";
import Category from "./Category.jsx"
import {GetCategory} from "../store/slice/categorySlice.js";
import {GetRecommends} from "../store/slice/recommendSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";
let mapStateToProps = (state) => {
    return {
        category:state.categoryReducer.category,
        categoryLoader:state.categoryReducer.isLoading,
        recommend:state.recommendReducer.recommends,
    };
};

const CategoryContainer = connect(mapStateToProps,{GetCategory,GetRecommends,GetSearch})(Category);
export default CategoryContainer;