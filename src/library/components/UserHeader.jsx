import React from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import logoImage from "../images/logo.png";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchBar from "../components/SearchBar"

const UserHeader = () => {
  const navigate = useNavigate;
  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <Content className="HeaderContent">
      <Content className="HeaderLogoContainer">
        <Logo className="responsiveImg" src={logoImage} width={120} />
      </Content>
      {/* value={val}
          options={top100Films} */}
      <Content>
      <SearchBar></SearchBar>
      </Content>
      <Content className="HeaderNav">
        <Icon sx={{ color: `${Theme.Colors.primary}` }}>home</Icon>
        <Icon sx={{ color: `${Theme.Colors.primary}` }}>
          account_circle_outlined
        </Icon>
        <Icon sx={{ color: `${Theme.Colors.primary}` }}>
          shopping_cart_outlined
        </Icon>
      </Content>
    </Content>
  );
};

export default UserHeader;
