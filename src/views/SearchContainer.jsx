import { connect } from "react-redux";
import SearchView from "./SearchView.jsx";
import {GetSearch} from "../store/slice/searcSlice.js";
import {GetFilter} from "../store/slice/filterSlice.js";

let mapStateToProps = (state) => {
    return {
        search:state.searchReducer.search,
        searchLoader:state.searchReducer.isLoading,
        filter: state.filterReducer.filter,
    };
};

const SearchContainer = connect(mapStateToProps,{GetSearch,GetFilter})(SearchView);
export default SearchContainer;