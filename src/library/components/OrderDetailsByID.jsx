import Grid from "@mui/material/Grid";
import SummaryCard from "./SummaryCard";
// import '../../App.css'
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

import { TableBody } from "@mui/material";

export default function OrderDetailsByID(props) {
  return (
    <Grid
      container
      rowSpacing={5}
      sx={{ border: "2px solid #EBEBEB", padding: "5px" }}
    >
      <Grid item xs={12} fullwidth={1}>
        <Grid container spacing={1} fullwidth={1}></Grid>
      </Grid>
      <Grid item fullwidth={1}>
        <Grid container className="example" spacing={5}>
          {props.productList && props.productList.length != 0
            ? props.productList.map((element, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <SummaryCard product={element}></SummaryCard>
                </Grid>
              ))
            : ""}
        </Grid>
      </Grid>
    </Grid>
  );
}
