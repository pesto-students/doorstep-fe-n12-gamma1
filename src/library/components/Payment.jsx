import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "./Buttons";
// import logo from "../images/logo.png";
import ApiInfo from "../../services/ApiInfoService";
import { postApi } from "../../services/ApiService";
import config from "../../config.json";

export default function Payment() {
  const [stripeToken, setStripeToken] = useState(null);

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
  // stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
  // name={process.env.REACT_APP_CLIENT_NAME}
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={config.result.envDetails.REACT_APP_STRIPE_PUBLIC_KEY}
      name={config.result.vendorName}
      image={config.result.template_Details.logoUrl}
      amount={3000}
      currency="USD"
      email="sunitagamne16@gmail.com"
      description="Your total bill is 3000 usd"
    >
      <Button className="Large">Pay</Button>
    </StripeCheckout>
  );
}
