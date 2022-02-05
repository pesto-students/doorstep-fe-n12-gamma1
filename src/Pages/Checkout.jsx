import React from "react";
import AddressForm from "../library/components/AddressForm";
// import Payment from "../library/components/Payment";
import OrderSummary from "../library/components/OrderSummary";
import Header from "../library/components/Header";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


export default function CheckoutPage() {
    
  return (
    <Container maxWidth="false" justify="center">
      <Grid container rowSpacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={8} >
            <Grid item xs={12} sm={6}>
              <OrderSummary />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Grid container rowSpacing={3} >
                <Grid item >
                  <AddressForm />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
