import React from "react";
import styled from "styled-components";
import Theme from "../styleHelpers/customTheme";

const Main = styled.div`
  contain: content;
`;

const MainContent = styled((props) =><Main {...props} />)`
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

  &&.LoginContent{
    width: 50vw;
    margin: 0;
    text-align: center;
    
  }

  &&.ConfigurationContent{
    width: 50vw;
    margin: 10px;
    text-align: center;
    
  }

  &&.HeaderContent{
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    padding: 1em;
    margin-bottom: 2em;
    color: #fff;
  }

  &&.HeaderLogoContainer{
   margin:0;
  }


  &&.LogoContainer{
    margin: 3rem 0 2rem 0; 
    text-align: center;
  }

  &&.MainContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    vertical-align: middle;
  }
  &&.FileUploadContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 30px;
  }
`;
export default MainContent;
