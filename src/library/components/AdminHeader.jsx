import React from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import logoImage from "../images/logo.png";

const AdminHeader = () => {
  const navigate=useNavigate
  const logout=()=>{
    window.localStorage.clear();
    navigate("/")
  }
  return (
    <Content className="HeaderContent">
      <Content className="HeaderLogoContainer">
        <Logo className="responsiveImg" src={logoImage} width={120} />
      </Content>
      <Content className="HeaderLogoContainer">
        <Icon onClick={logout} sx={{ color: `${Theme.Colors.primary}` }}>account_circle</Icon>
      </Content>
    </Content>
  );
};

export default AdminHeader;
