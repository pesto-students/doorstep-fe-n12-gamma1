import React, { useState,useEffect } from "react";
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
import { cartActions} from "../../app/reducers/cartReducer"
import { useNavigate } from "react-router-dom";

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
        // let billingDetails;
        const logo=config.result.template_Details.logoUrl;
        let token,userInfo;
        let navigate = useNavigate();
        const dispatch = useDispatch();
        const data=(useSelector(state => state));
       
        const productList = data.cartReducer.products;
        
        const paymentInfo = data.cartReducer.paymentInfo;
        const amt=data.cartReducer.paymentInfo.total*100;
        const desc=`Your total bill is ${data.cartReducer.paymentInfo.total} INR`
        if(window.localStorage.getItem("user") !== null)
          userInfo=JSON.parse(window.localStorage.getItem("user"));
          const today=new Date();
          const tomorrow=new Date(today.setDate(today.getDate()+1)).toDateString();
        
        useEffect(() => {
          const makePayment = async () => {
              dispatch(orderActions.fetchOrder({
                  token: stripeToken,
                  deliveryInfo:billingInfo,
                  productList:productList,
                  paymentInfo:paymentInfo,
                  userInfo:userInfo,
                  apiName:"payment",
                  delivery_date:tomorrow
                }))

                dispatch(cartActions.emptyCart());
              
            }

          stripeToken && makePayment();
        }, [stripeToken]);

       
        const orderList=data.orderReducer.orderList.result;
       
        if(orderList && orderList.length!==0)
            navigate(`/orderDetails?orderId=${orderList[0]._id}`)
        
        const onToken = (tok) => {
          token=tok;
          setStripeToken(tok);
        };

      let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        billingInfo[name] = value.trim();
        
      }
    
      let handleSubmit = (e) => {
        e.preventDefault();
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
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
              fullwidth={1}
              onChange={handleChange}
              
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
      amount={amt}
      currency="INR"
      email="sunitagamne16@gmail.com"
      description={desc}
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
