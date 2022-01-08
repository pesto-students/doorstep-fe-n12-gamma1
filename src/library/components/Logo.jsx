import React from "react";
import logo from "../images/logo.png";


const Logo = (props) => {
  return (
      <img src={logo} width={props.width} height={props.height} alt="" />
  );
};

export default Logo;
