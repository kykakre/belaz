import React from "react";
import Benefits from "../components/Benefits/Benefits";
import NewsForm from "../components/News/NewsForm.jsx";
import HomeBunner from "../components/HomeBanner/HomeBunner.jsx";

const Main = (props) => {
  return (
    <div>
        <HomeBunner/>
      <Benefits benefits={props.benefits} />
        <NewsForm/>
    </div>
  );
};

export default Main;
