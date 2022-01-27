import * as React from "react";
import Grid from "@mui/material/Grid";
import CartItem from "./CartItem";
import Card from "./Card";
import Content from "./Content";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import OrderItem from "./OrderItem";

export default function SpacingGrid({ values, imgUrl }) {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Content className="carts">
      <Content className="cartRow">
        <h1>Item Description</h1>
        <h1>Unit Price</h1>
        <h1>Quantity</h1>
        <h1>SubTotal</h1>
      </Content>

      {values.map((order) => (
        <OrderItem
          key={order.id}
          description={order.description}
          sellingPrice={order.sellingPrice}
          quantity={order.qty}
          total={order.total}
        />
      ))}
    </Content>
  );
}
