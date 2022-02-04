import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "./Buttons";
// import logo from "../images/logo.png";
// import ApiInfo from "../../services/ApiInfoService";
// import { postApi } from "../../services/ApiService";
import config from "../../config.json";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize"
// import Payment from "./Payment";
import { useSelector, useDispatch } from "react-redux";
import {orderActions} from "../../app/reducers/orderReducer";

export default function AddressForm() {
        const [stripeToken, setStripeToken] = useState(null);
        let [billingInfo, setBillingInfo] = useState({
          firstname:'',
          lastname:'',
          emailAddress:'',
          contactNumber:'',
          address:'',
          city:'',
          stateCountry:'',
          zipCode:''
        });
        const logo=config.result.template_Details.logoUrl;
        const dispatch = useDispatch();
        const data=(useSelector(state => state));
        const orderList=data.orderReducer.orderList.result;
        console.log("orderList",orderList)
        const productList = data.cartReducer.products;
        const paymentInfo = data.cartReducer.paymentInfo;
        const userInfo=data.authReducer.userInfo.result
        
        useEffect(() => {
          debugger;
          const makePayment = async () => {
            try {
              // const result = await postApi(ApiInfo.payment, {
              //   token: stripeToken,
              //   amount: 3000,
              // });
              dispatch(orderActions.payForOrder({
                  token: stripeToken,
                  deliveryInfo:billingInfo,
                  productList:productList,
                  paymentInfo:paymentInfo
                }))
              
            } catch (err) {
              console.log("error", err);
            }
          };
          stripeToken && makePayment();
        }, [stripeToken,billingInfo]);
      
        const onToken = (token) => {
          console.log("token", token);
          setStripeToken(token);
        };

      let handleChange = (e) => {
        console.log("e",e)
        let name = e.target.name;
        let value = e.target.value;
        billingInfo[name] = value;
        setBillingInfo(billingInfo);
      }
    
      let handleSubmit = (e) => {
        e.preventDefault();
        console.log(billingInfo);
      }

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
              name="firstname"
              fullwidth={1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}  fullwidth={1}>
                    <TextField id="outlined-basic" name="lastname"  label="Last name" onChange={handleChange} variant="outlined" fullwidth={1}/>
            </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Email address"
              name="emailAddress"
              variant="outlined"
              fullwidth={1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Phone number"
              name="contactNumber"
              variant="outlined"
              fullwidth={1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextareaAutosize 
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
              fullwidth={1}
              onChange={handleChange}
              minRows={3}
              style={{ width: 200 }}
            />

          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Town/City"
              variant="outlined"
              name="city"
              onChange={handleChange}
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="State,Country"
              variant="outlined"
              name="stateCountry"
              onChange={handleChange}
              fullwidth={1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} fullwidth={1}>
            <TextField
              id="outlined-basic"
              label="Zip/Postal code"
              variant="outlined"
              name="zipCode"
              onChange={handleChange}
              fullwidth={1}
            />
          </Grid>
         <Grid item xs={12} sm={12} md={12} lg={12} fullwidth={1}>
         {/* <button type="submit">Login</button> */}
         <StripeCheckout
      token={onToken}
      stripeKey={config.result.envDetails.REACT_APP_STRIPE_PUBLIC_KEY}
      name={config.result.vendorName}
      image={logo}
      amount={3000}
      currency="INR"
      email="sunitagamne16@gmail.com"
      description="Your total bill is 3000 usd"
    >
      <Button className="Large" type="submit"> Pay</Button>
    </StripeCheckout>
         </Grid>
        </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
