import Paper from "@mui/material/Paper";
import Content from "./Content";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Theme from "../styleHelpers/customTheme";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
const Item = styled(Paper)(({ theme }) => ({
  color: "#ffddff",
}));

const OrderItem = ({ imgUrl, description, sellingPrice, qty, subtotal }) => {
  return (
    <>
      <Content className="cartRow">
        <h3
          style={{
            display: "inline",
            textAlign: "left",
            fontSize: "18px",
            color: Theme.Colors.cardTitle,
          }}
        >
          {description}
        </h3>
        <h3
          style={{
            display: "inline",
            textAlign: "left",
            fontSize: "18px",
            color: Theme.Colors.cardTitle,
          }}
        >
          {(sellingPrice || 36.84) + " INR"}
        </h3>

        <h3
          style={{
            display: "inline",
            textAlign: "left",
            fontSize: "18px",
            color: Theme.Colors.cardTitle,
          }}
        >
          {qty || 1}
        </h3>
        <h3
          style={{
            display: "inline",
            textAlign: "left",
            fontSize: "18px",
            color: Theme.Colors.cardTitle,
          }}
        >
          {subtotal || 1}
        </h3>
      </Content>
    </>
  );
};

export default OrderItem;
