import { connect } from "react-redux";
import Contact from "./Contact.jsx"
let mapStateToProps = (state) => {
    return {
        news:state.newsReducer.news,
        contacts:state.contactReducer.contacts,
    };
};

const ContactContainer = connect(mapStateToProps)(Contact);
export default ContactContainer;