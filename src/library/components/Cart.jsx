import React from "react";
import { Badge } from "@material-ui/core";
import Icon from "@mui/material/Icon";
import Theme from "../styleHelpers/customTheme";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state);
  const products = data.cartReducer.products;
  const onOpenCart = () => navigate("/cart");

  return (
    <Badge
      badgeContent={products.length}
      color="secondary"
      onClick={onOpenCart}
    >
      <Icon sx={{ color: `${Theme.Colors.primary}`, fontSize: 30 }}>
        shopping_cart_outlined
      </Icon>
    </Badge>
  );
};

export default Cart;
