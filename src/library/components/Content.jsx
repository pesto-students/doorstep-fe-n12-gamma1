import React from "react";
import styled from "styled-components";
import Colors from "../styleHelpers/customTheme";

const Main = styled.div`
  contain: content;
`;

const MainContent = styled((props) => {
  return <Main {...props} />;
})`
  & {
    height: ${(props) => props.style?.height};
    width: ${(props) => props.style?.width};
    margin: ${(props) => props.style?.margin};
    text-align: ${(props) => props.style?.textAlign};
  }
  && .Container {
    border: 1px solid ${Colors.primary};
    box-sizing: border-box;
    border-radius: 14px;
    padding: 10px;
  }

  && .MainContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
export default MainContent;
