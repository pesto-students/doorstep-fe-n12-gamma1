import React from "react";
import styled from "styled-components";
import Theme from "../styleHelpers/customTheme";

const CustomLabel = styled.label`
  color: ${Theme.Colors.primary};
`;

const CLabel = styled((props) => <CustomLabel {...props} />)`
  & h6 {
    margin: 0;
  }
  && .CardMainLabel {
    margin: 0;
    text-align: left;
    line-height: 23px;
    font-size: 15px;
    color: ${Theme.Colors.cardTitle};
  }
  && .CardDescription {
    margin: 0;
    padding: 0;
    text-align: left;
    line-height: 16px;
    font-size: 12px;
    color: ${Theme.Colors.cardDescription};
  }
  && .costLabel {
    display: inline;
    text-align: left;
    font-size: 18px;
    color: ${Theme.Colors.cardTitle};
  }

  && .strikedLabel {
    display: inline;
    color: ${Theme.Colors.cardDescription};
    font-size: 12px;
    text-decoration: line-through;
  }

  &&.ItalicFont {
    font-style: italic;
  }
  &&.whiteLabel {
    color: ${Theme.Colors.white};
  }
`;

export default CLabel;
