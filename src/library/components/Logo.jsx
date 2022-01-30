import React from "react";
import logo from "../images/logo.png";
import styled from "styled-components";


const Logo = styled((props) => {
    return <img src={logo} {...props}  style={{maxWidth:"200px"}} alt="" />
})`
width: min(50vw, ${(props)=>props.width}px);
`


export default Logo;
