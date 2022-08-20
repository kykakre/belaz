import React from "react";
import Benefits from "../components/Benefits/Benefits";

const Main = (props) => {
  return (
    <div>
      <Benefits benefits={props.benefits} />
    </div>
  );
};

export default Main;
