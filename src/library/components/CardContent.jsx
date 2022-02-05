import React from "react";
import styled from "styled-components";
import CardContent from "@mui/material/CardContent";

const CustomCardContent = styled((props) => <CardContent {...props} />)`
  & {
    padding: 7px;
  }
`;

export default CustomCardContent;
