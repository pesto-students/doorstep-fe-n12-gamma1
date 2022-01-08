import React from "react";
import styled from "styled-components";
import Colors from "../styleHelpers/customTheme";

const CustomLabel = styled.label`
  color: ${Colors.primary};
`;

const CLabel = styled((props) => {
  return <CustomLabel {...props} />;
})`
  & {
    text-align: ${(props) => props.style?.textAlign};
    
  }
  & h6 {
    margin: ${(props) => props.children.props.style?.margin};
    font-style: ${(props) => props.children.props.style?.fontStyle};
  }
`;
export default CLabel;
