import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Theme from "../styleHelpers/customTheme";

const Btn = styled(Button)`
  && {
    border: 1px solid ${Theme.Colors.primary};
    color: ${Theme.Colors.white};
    border-radius: ${Theme.CommonTheme.borderRadius};
    background-color: ${Theme.Colors.primary};
    cursor: pointer;
  }
  &&.MuiButton-root:hover {
    background-color: ${Theme.Colors.primary};
    color: ${Theme.Colors.white};
    ursor: pointer;
  }
`;

const Buttons = styled((props) => {
  return <Btn {...props} />;
})`
  & {
    height: ${(props) => props.style?.height};
    width: ${(props) => props.style?.width};
    margin: ${(props) => props.style?.margin};
    text-align: ${(props) => props.style?.textAlign};
  }
  &&.Small {
    width: min(50vw, 20vw);
    height: auto;
    margin: 5px;
  }

  &&.Large {
    width: min(50vw, 30vw);
    height: auto;
    margin: 10px;
  }
  &&.cardBtn {
    float: right;
    height: 36px;
    width: 112px;
  }
  &&.IncDecBtn {
    min-width: 1px;
    width: 16.24px;
    background-color: ${Theme.Colors.primary};
    height: 22.5px;
    padding: 0 0 0 0;
  }
  &&.googleBtn {
    width: 25vw;
  height: auto;
  margin: 10px;
  box-shadow: none !important;
  background-color:transparent!important;
  border: 1px solid ${Theme.Colors.primary}!important;
  color: ${Theme.Colors.primary}!important;
  border-radius: ${Theme.CommonTheme.borderRadius}!important;
  justify-content: center;
  }
`;
export default Buttons;
