import { connect } from "react-redux";
import Category from "./Category.jsx"
let mapStateToProps = (state) => {
    return {
        category:state.categoryReducer.category,
        product:state.productReducer.product,
    };
};

const CategoryContainer = connect(mapStateToProps)(Category);
export default CategoryContainer;