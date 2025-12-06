import React from "react";
import spin from "../img/spinner.gif";

const Spinner: React.FC = () => {
  return (
    <div className="center">
      <img src={spin.src} alt="Spinner" style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </div>
  );
};

export default Spinner;
