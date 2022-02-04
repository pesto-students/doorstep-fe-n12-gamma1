import Grid from "@mui/material/Grid";
import SummaryCard from "./SummaryCard";
// import '../../App.css'
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { TableBody } from "@mui/material";

export default function OrderDetailsByID() {
  const data = useSelector((state) => state);
  console.log("data",data)
  const productList = data.cartReducer.products;
  console.log("productList",productList)
  const paymentInfo = data.cartReducer.paymentInfo;
  const today=new Date();
  const tomorrow=new Date(today.setDate(today.getDate()+1)).toDateString();
console.log("today",today)
  return (
    <Grid container rowSpacing={5}>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h2 style={{ margin: "0", padding: "0" }}>Order Details</h2>
          </Grid>
          <Grid item xs={12}>
            <p style={{ color: "#C1C1C1", margin: "0", padding: "0" }}>
              Price can change depending on shipping method and taxes of your
              state.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item fullwidth={1}>
        <Grid
          container
          item
          className="example"
          
        >
          {/* sx={{ maxHeight: "55vh", overflow: "scroll" }} */}
          {productList && productList.length != 0
            ? productList.map((element, index) => (
                <Grid item key={index}>
                  <SummaryCard product={element}></SummaryCard>
                </Grid>
              ))
            : ""}
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Table item  fullwidth={1} sx={{ fontWeight: "bold" }}>
            <TableBody>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>SubTotal</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              {paymentInfo.amount} INR
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Tax</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              12% {paymentInfo.tax} INR
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Shipping</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              0 INR
            </TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={12}>
        <Table item  fullwidth={1} sx={{ fontWeight: "bold" }}>
            <TableBody>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
              <Typography sx={{ color: "#C1C1C1" }}>
                Guaranteed delivery day: {tomorrow}
              </Typography>
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {paymentInfo.total} INR
              </Typography>
            </TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </Grid> */}
    </Grid>
  );
}
