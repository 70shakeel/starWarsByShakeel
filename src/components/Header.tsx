import React from "react";
import hImg from "../img/logo.png";

const Header: React.FC = () => {
  return (
    <div className="header center">
      <img src={hImg.src} alt="headerImage" />
    </div>
  );
};

export default Header;
