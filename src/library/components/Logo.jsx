import React from "react";
import logo from "../images/logo.png";
import styled from "styled-components";
import config from "../../config.json";


const Logo = styled((props) => {
    // src={config.result.template_Details.logoUrl}
    return <img  {...props}  alt="" />
})`
width: min(50vw, ${(props)=>props.width}px);
`


export default Logo;
