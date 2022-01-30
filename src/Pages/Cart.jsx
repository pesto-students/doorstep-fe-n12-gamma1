import Header from "../library/components/Header";
import Content from "../library/components/Content";
import styled from "styled-components";

import CartGrid from "../library/components/CartGrid";
import Paper from "@mui/material/Paper";
import products from "../services/products";
import CartItem from "../library/components/CartItem";
import Buttons from "../library/components/Buttons";
import { useSelector } from "react-redux";
const Item = styled(Paper)(({ theme }) => ({
  color: "#ffddff",
}));

const Cart = () => {
  const data=useSelector(state => state);
  const products=data.cartReducer.products;
  console.log("products",products)
  return (
    <>
      <Header />
      <Content className="main_cart">
        <Content className="cart_left">
          <CartGrid values={products} />
        </Content>
        <Content className="cart_right">
          <Content style={{ display: "flex" }}>
            <h3>SubTotal</h3>
            <h3>36.99 INR</h3>
          </Content>
          <Buttons classNmae="Small">Proceed to Checkout</Buttons>
        </Content>
      </Content>
    </>
  );
};

export default Cart;
