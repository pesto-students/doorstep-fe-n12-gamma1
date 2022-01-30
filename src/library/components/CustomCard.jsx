import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";

const CustomCard = styled((props) => (
  <Card
    sx={{
      maxWidth: 345,
      width: "269px",
      height: "332px",
      borderRadius: "12px",
      border: "3px solid #EBEBEB",
    }}
    {...props}
  />
))``;

export default CustomCard;
