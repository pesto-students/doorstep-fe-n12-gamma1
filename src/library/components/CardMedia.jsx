import React from "react";
import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import Theme from "../styleHelpers/customTheme";
import Grid from "@mui/material/Grid";
const CustomCardMedia = styled((props) => (
  <Grid container sx={{ display: "flex", justifyContent: "center" }}>
    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
      <CardMedia
        component="img"
        height="170"
        alt="Image Not Available"
        {...props}
      />
    </Grid>
  </Grid>
))`
  & {
    width: 80%;
    padding: 16px 27px 16px 27px;
    border-radius: ${Theme.CommonTheme.borderRadius};
  }
`;
export default CustomCardMedia;
