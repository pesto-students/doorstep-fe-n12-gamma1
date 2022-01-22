import React from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox"

const Header = () => {
  const navigate=useNavigate
  const logout=()=>{
    window.localStorage.clear();
    navigate("/")
  }
  return (
    <Content className="HeaderContent">
      <Content className="HeaderLogoContainer">
        <Logo className="responsiveImg" width={120} />
      </Content>
      <Content className="HeaderMiddleContainer">
          <Dropdown></Dropdown>
          <SearchBox></SearchBox>
          </Content>
      <Content className="HeaderLogoContainer">
        <Icon onClick={logout} sx={{ color: `${Theme.Colors.primary}` }}>account_circle</Icon>
      </Content>
    </Content>
  );
};

export default Header;
