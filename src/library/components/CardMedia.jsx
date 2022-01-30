import React from "react";
import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import Theme from "../styleHelpers/customTheme";

const CustomCardMedia = styled((props) => (
  <CardMedia
    component="img"
    height="180"
    width="536"
    alt="Image Not Available"
    {...props}
  />
))`
  & {
    width: 90%;
    padding: 16px 16px 16px 14px;
    border-radius: ${Theme.CommonTheme.borderRadius};
  }
`;

export default CustomCardMedia;
