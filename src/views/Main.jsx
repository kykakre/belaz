import React from "react";
import Benefits from "../components/Benefits/Benefits";
import NewsForm from "../components/News/NewsForm.jsx";

const Main = (props) => {
  return (
    <div>
      <Benefits benefits={props.benefits} />
        <NewsForm/>
    </div>
  );
};

export default Main;
