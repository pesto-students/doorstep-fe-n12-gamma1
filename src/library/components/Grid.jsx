import * as React from "react";
import Grid from "@mui/material/Grid";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import HighlightedCode from "docs/src/modules/components/HighlightedCode";
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";
// import Paper from "@mui/material/Paper";

//
// import values from "../../services/products";
import Card from "./Card";

export default function SpacingGrid({ values }) {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {values.map((product) => (
            <Grid key={product.id} item>
              <Card
                key={product.id}
                imgUrl={product.imgUrl}
                title={product.title}
                description={product.description}
                sellingPrice={product.sellingPrice}
                mrp={product.mrp}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
