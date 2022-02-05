import React,{useEffect } from "react";
import Container from "@mui/material/Container";
import Header from "../library/components/Header";
import OrderGrid from "../library/components/OrderGrid";
import orders from "../services/orders";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import {orderActions} from "../app/reducers/orderReducer";
import config from "../config.json";
const OrderHistory = () => {
  const dispatch = useDispatch();
  const data=(useSelector(state => state));
    const orderDetails=data.orderReducer.orderList.result;
    const apiName=`user/orderList?prefix=${config.result.prefix}`

      useEffect(() => {
        dispatch(orderActions.fetchOrder({
            apiName:apiName
          }))
      }, []);
  return (
    <Container maxWidth="false">
      <Grid container rowSpacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <OrderGrid values={orderDetails} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderHistory;
