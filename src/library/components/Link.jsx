import * as React from "react";
import styled from "styled-components";
import Theme from "../styleHelpers/customTheme";
import { Link } from "react-router-dom";

const CLink = styled(Link)`
  && {
    color: ${Theme.Colors.primary}!important;
  }
`;

const CustomLink = styled((props) => {
  return <CLink {...props} />;
})``;
export default CustomLink;
