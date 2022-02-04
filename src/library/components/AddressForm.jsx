import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "./Buttons";
// import logo from "../images/logo.png";
import ApiInfo from "../../services/ApiInfoService";
import { postApi } from "../../services/ApiService";
import config from "../../config.json";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Payment from "./Payment";

export default function AddressForm() {
        const [stripeToken, setStripeToken] = useState(null);
        const logo=config.result.template_Details.logoUrl;
        
        useEffect(() => {
          const makePayment = async () => {
            try {
              const result = await postApi(ApiInfo.payment, {
                token: stripeToken,
                amount: 3000,
              });
              console.log("result", result);
            } catch (err) {
              console.log("error", err);
            }
          };
          stripeToken && makePayment();
        }, [stripeToken]);
      
        const onToken = (token) => {
          console.log("token", token);
          setStripeToken(token);
        };

  let billing_info = {
          firstname:'',
          lastname:'',
          emailAddress:'',
          contactNumber:'',
          address:'',
          city:'',
          stateCountry:'',
          zipCode:''
  };

  const handleSubmit = (event) => {
//         console.log("event",event.target.elements[0]);
//         console.log("event.nativeEvent.path",event.nativeEvent.path[0]);
//         const formData = new FormData(event.nativeEvent.path[0]);
        
//         console.log("formData",formData);
        event.preventDefault();
//         for (let [key, value] of formData.entries()) {
//           console.log(key, value);
//         }
        const forms = document.querySelectorAll('form');
const form = forms[0];
// console.log("form.elements",form.elements)

Array.from(form.elements).forEach((input) => {
  console.log(input);
});
      };

  return (
    <Grid container spacing={5}>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2 style={{ margin: "0", padding: "0" }}>Billing Info</h2>
          </Grid>
          <Grid item xs={12}>
            <p style={{ color: "#C1C1C1", margin: "0", padding: "0" }}>
              Please enter your billing info
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
             
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}  fullwidth={1}>
                    <TextField id="outlined-basic"  label="Last name" variant="outlined" fullwidth={1}/>
            </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Town/City"
              variant="outlined"
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="State,Country"
              variant="outlined"
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Zip/Postal code"
              variant="outlined"
              fullwidth={1}
            />
          </Grid>
         <Grid item xs={12} sm={12} md={12} lg={12} fullwidth={1}>
         {/* <button type="submit">Login</button> */}
         {/* <StripeCheckout
      token={onToken}
      stripeKey={config.result.envDetails.REACT_APP_STRIPE_PUBLIC_KEY}
      name={config.result.vendorName}
      image={logo}
      amount={3000}
      currency="INR"
      email="sunitagamne16@gmail.com"
      description="Your total bill is 3000 usd"
    > */}
      <Button className="Large" type="submit"> Pay</Button>
    {/* </StripeCheckout> */}
         </Grid>
        </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
