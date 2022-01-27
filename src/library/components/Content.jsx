import React from "react";
import styled from "styled-components";
import Theme from "../styleHelpers/customTheme";

const Main = styled.div`
  contain: content;
`;

const MainContent = styled((props) => <Main {...props} />)`
  & {
    height: ${(props) => props.style?.height};
    width: ${(props) => props.style?.width};
    margin: ${(props) => props.style?.margin};
    text-align: ${(props) => props.style?.textAlign};
  }
  &&.Container {
    border: 1px solid ${Theme.Colors.primary};
    box-sizing: border-box;
    border-radius: ${Theme.CommonTheme.borderRadius};
    padding: 10px;
  }

  &&.adminTheme{
    border-color:${Theme.Colors.adminPrimary}
  }

  &&.LoginContent {
    width: 50vw;
    margin: 0;
    text-align: center;
  }

  &&.ConfigurationContent {
    width: 50vw;
    margin: 10px;
    text-align: center;
  }

  &&.HeaderContent {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    padding: 1em;
    margin-bottom: 2em;
  }

  &&.HeaderLogoContainer{
   margin:0;
   color: ${Theme.Colors.primary};
  }

  &&.HeaderMiddleContainer{
    margin:0;
    color: ${Theme.Colors.primary};
    display: flex;
    align-items: center;
    flex-direction: row;
   }

  &&.HeaderNav {
    width: 10%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: baseline;
  }

  &&.SearchBar {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &&.DropDown .MuiFilledInput-input {
    background: red;
    padding-top: 0;
  }
  &&.SearchInput {
    padding: 30px;
    font-size: 40px;
  }
  &&.SearchOptions {
    width: 30%;
  }
  &&.searchfield {
    display: flex;
    flex: 2;
  }
  &&.dropdown {
    display: flex;
    flex: 1;
  }
  &&.HeaderLogoContainer {
    margin: 0;
  }

  &&.flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    padding: 10px;
    width: 30%;
  }

  &&.flexbrands {
    display: flex;
  }

  &&.Header {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    padding: 1em;
    margin-bottom: 2em;
    color: ${Theme.Colors.primary};
  }

  &&.LogoContainer {
    margin: 3rem 0 2rem 0;
    text-align: center;
  }

  &&.MainContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    vertical-align: middle;
  }
  &&.FileUploadContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 30px;
  }

  &&.main_content {
    width: 100%;
    display: flex;
  }
  &&.page_left {
    flex: 1;
  }
  &&.page_right {
    flex: 3;
  }
  &&.main_cart {
    display: flex;
  }
  &&.cart_left {
    flex: 3;
    display: flex;
    // background-color: powderblue;
  }
  &&.cart_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  &&.carts {
    display: flex;
    flex-direction: column;
    width: 100%;
    // color: blue;
  }
  &&.cartRow {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;
export default MainContent;
