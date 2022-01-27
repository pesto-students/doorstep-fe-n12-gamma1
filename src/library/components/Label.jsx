import React from "react";
import styled from "styled-components";
import Theme from "../styleHelpers/customTheme";

const CustomLabel = styled.label`
  color: ${Theme.Colors.primary};
`;

const CLabel = styled((props) => <CustomLabel {...props} />)`

  & h6 {
    margin:0;
  }
  &&.CardMainLabel{ 
    margin: 0;
    text-align: left;
    line-height: 23px; 
    font-size: 15px;
    color: Theme.Colors.cardTitle;
  }
  &&.ItalicFont{
    font-style: italic;
  }
  &&.whiteLabel{
    color: ${Theme.Colors.white};
  }
  &&.adminLabel{
    color:${Theme.Colors.adminPrimary}
  }
`;

// & {
//   text-align: ${(props) => props.style?.textAlign};
//   margin: ${(props) => props.children.props.style?.margin};
//   font-style: ${(props) => props.children.props.style?.fontStyle};
// }
export default CLabel;
