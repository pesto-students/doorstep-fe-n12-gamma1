import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card";

export default function SpacingGrid({ values }) {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={4} sx={{maxHeight:'85vh', overflow:'scroll'}}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" rowSpacing={6} columns={12}>
          {values && values.length!=0?values.map((product,index) => (
            <Grid key={product._id} item sm={12} md={6} lg={4} xl={3}>
              <Card
                key={index}
                product={product}
              />
            </Grid>
          )):''}
        </Grid>
      </Grid>
    </Grid>
  );
}
