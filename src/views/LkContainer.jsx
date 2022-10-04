import { connect } from "react-redux";
import Lk from "./Lk.jsx";

let mapStateToProps = (state) => {
    return {
        personInfo:state.personInfoReducer.personInfo,
    };
};

const LkContainer = connect(mapStateToProps)(Lk);
export default LkContainer;
