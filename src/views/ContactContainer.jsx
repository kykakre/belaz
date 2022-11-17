import { connect } from "react-redux";
import { GetNewsAll } from "../store/slice/newsSlice.js";
import Contact from "./Contact.jsx";
let mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news,
    contacts: state.contactReducer.contacts,
  };
};

const ContactContainer = connect(mapStateToProps, { GetNewsAll })(Contact);
export default ContactContainer;
