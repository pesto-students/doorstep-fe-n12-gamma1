import React, { useEffect } from "react";
import OrderDetailsByID from "../library/components/OrderDetailsByID";
import Header from "../library/components/Header";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "../app/reducers/orderReducer";
import config from "../config.json";

export default function OrderDetails() {
  const dispatch = useDispatch();
  const search = useLocation().search;
  const orderId = new URLSearchParams(search).get("orderId");
  
  const apiName = `user/orderList?prefix=${config.result.prefix}&orderId=${orderId}`;

  useEffect(() => {
    dispatch(
      orderActions.fetchOrder({
        orderId: orderId,
        apiName: apiName,
      })
    );
  }, []);
  const data = useSelector((state) => state);
  const orderDetails = data.orderReducer.orderList
    ? data.orderReducer.orderList.result
    : null;
  let obj;
  if (orderDetails && orderDetails.length!=0) {
    console.log("orderDetails",orderDetails)
    obj = {
      name: orderDetails[0].billingInfo.fullname,
      email: orderDetails[0].billingInfo.emailAddress,
      address: orderDetails[0].billingInfo.address
        ? orderDetails[0].billingInfo.address
        : "NA",
      subtotal: orderDetails[0].paymentInfo.amount,
      tax: orderDetails[0].paymentInfo.tax,
      total: orderDetails[0].paymentInfo.total,
    };
  }

  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={10} >
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={0}
                sx={{ border: "2px solid #EBEBEB", padding: "7px" }}
              >
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="p" sx={{ fontWeight: "bold" }}>
                            Shipping Address
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container>
                            <Grid item xs={12}>
                              <Typography variant="p">{obj?.name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="p">
                                email: {obj?.email}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="p">
                                {obj?.address}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="p" sx={{ fontWeight: "bold" }}>
                            Payment Method
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="p">Credit Card</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                          <Typography variant="p" sx={{ fontWeight: "bold" }}>
                            Order Summary
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <table style={{ width: "100%" }}>
                            <tbody>
                              <tr>
                                <td>SubTotal</td>
                                <td>{obj?.subtotal} INR</td>
                              </tr>
                              <tr>
                                <td>Tax</td>
                                <td>12% {obj?.tax} INR</td>
                              </tr>
                              <tr>
                                <td>Shipping</td>
                                <td>0 INR</td>
                              </tr>
                              <tr>
                                <td style={{ fontWeight: "bold" }}>Total</td>
                                <td style={{ fontWeight: "bold" }}>
                                  {obj?.total} INR
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {orderDetails ? (
                <OrderDetailsByID productList={orderDetails[0].products} />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
