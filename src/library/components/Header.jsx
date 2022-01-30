import React, { useState,useEffect } from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import DropDown from "./Dropdown";
import SearchBox from "./SearchBox"
import categories from "../../services/categories";
import SearchField from "./SearchField";
import { useSelector, useDispatch } from "react-redux";
import {categoryActions} from "../../app/reducers/categoryReducer";
import Cart from "../components/Cart"

const Header = () => {
    const dispatch = useDispatch();
  const categoryResult=(useSelector(state => state));
  console.log("categoryResult",categoryResult)
  const categoryList=categoryResult.categoryReducer.categoryList.result;
  console.log("categoryList",categoryList)
   useEffect(() => {
    dispatch(categoryActions.fetchCategory())
  },[]);

  // const removeProductFromCart=()=>{}
  // const openCart=()=>{}
  // const closeCart=()=>{}
  return (
    <Content className="Header">
      <Content className="HeaderLogoContainer">
        <Logo className="responsiveImg" width={120} />
      </Content>

      <Content className="SearchBar">
        <Content className="dropdown">
          <DropDown values={categoryList} variant="outlined" />
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
        {/* <Icon sx={{ color: `${Theme.Colors.primary}` }}>
          shopping_cart_outlined
        </Icon> */}
        <Cart/>
      </Content>
    </Content>
  );
};

export default Header;
