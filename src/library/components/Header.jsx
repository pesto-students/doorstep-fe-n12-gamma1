import React, { useState } from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox"
import categories from "../../services/categories";


import SearchField from "./SearchField";

const Header = () => {
  return (
    <Content className="Header">
      <Content className="HeaderLogoContainer">
        <Logo className="responsiveImg" width={120} />
      </Content>

      <Content className="SearchBar">
        <Content className="dropdown">
          <DropDown values={categories} variant="outlined" />
        </Content>
        <Content className="searchfield">
          <SearchField />
        </Content>
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

export default Header;
