import React from "react";
import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import Theme from "../styleHelpers/customTheme";

const CustomCardMedia = styled((props) => (
  <CardMedia
    component="img"
    height="180"
    alt="Image Not Available"
    {...props}
  />
))`
  & {
    width: 80%;
    padding: 16px 27px 16px 27px;
    border-radius: ${Theme.CommonTheme.borderRadius};
  }
`;

export default CustomCardMedia;
