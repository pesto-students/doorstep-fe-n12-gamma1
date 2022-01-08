import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Theme from "../styleHelpers/customTheme";

const Btn = styled(Button)`
  && {
    border: 1px solid ${Theme.Colors.primary};
    color: ${Theme.Colors.primary};
    border-radius: ${Theme.CommonTheme.borderRadius};
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
  && .Small {
    width: 15rem;
    height: auto;
    margin: 5px;
  }

  && .Large {
    width: 25rem;
    height: auto;
    margin: 10px;
  }
`;
export default Buttons;
