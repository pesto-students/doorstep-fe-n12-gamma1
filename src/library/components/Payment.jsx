import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "./Buttons";
// import logo from "../images/logo.png";
import ApiInfo from "../../services/ApiInfoService";
import { postApi } from "../../services/ApiService";
import config from "../../config.json";

export default function Payment(props) {
  const [stripeToken, setStripeToken] = useState(null);
  const logo = config.result.template_Details.logoUrl;

  useEffect(() => {
    const makePayment = async () => {
      try {
        const result = await postApi(ApiInfo.payment, {
          token: stripeToken,
          amount: 3000,
        });
      } catch (err) {}
    };
    stripeToken && makePayment();
  }, [stripeToken]);

  const onToken = (token) => {
    setStripeToken(token);
  };
  return (
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
      <Button className="Large"> Pay</Button>
    </StripeCheckout>
  );
}
