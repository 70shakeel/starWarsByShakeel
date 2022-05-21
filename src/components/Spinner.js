import React from "react";
import spin from "../img/spinner.gif";

const Spinner = () => {
  return (
    <div className="center">
      <img src={spin} alt="Spinner" width="5%" />
    </div>
  );
};

export default Spinner;
