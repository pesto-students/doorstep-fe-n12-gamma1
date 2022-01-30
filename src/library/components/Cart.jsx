import React from "react";
import {
  Button,
  Badge,
  Menu,
  MenuItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
// import ShoppingCart from "@material-ui/icons/ShoppingCart";
// import DeleteIcon from "@material-ui/icons/Delete";
// import FolderIcon from "@material-ui/icons/Folder";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";
import { useNavigate } from "react-router-dom";


// {
//     onOpenCart,
//     isCartOpen,
//     onCloseCart,
//     products,
//     onRemoveProductFromCart,
//   }
const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data=useSelector(state => state);
  // console.log("data",data)
  // const isCartOpen=data.cartReducer.show_products;
  const products=data.cartReducer.products;
  // const onOpenCart= () => dispatch(cartActions.showCartProducts());
  const onOpenCart= () => navigate('/cart');
  const onRemoveProductFromCart= (product) =>
    dispatch(cartActions.removeProductFromCart(product));

  return (
    <>
      <Button
        aria-controls="cart-menu"
        aria-haspopup="true"
        onClick={onOpenCart}
        color="inherit"
      >
        <Badge badgeContent={products.length} color="secondary">
          {/* <ShoppingCart /> */}
          <Icon sx={{ color: `${Theme.Colors.primary}` }}>
          shopping_cart_outlined
        </Icon>
        </Badge>
      </Button>
      {/* {products && products.length > 0 ? (
        <Menu
          id="cart-menu"
          keepMounted
          open={isCartOpen}
          onClose={onCloseCart}
        >
          {products.map((product,index) => (
            <MenuItem key={index}>
              <ListItemAvatar>
                <Avatar variant="rounded" src={ product.img} />
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={product.discounted_price}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onRemoveProductFromCart(product)}
                >
                  
                  <Icon sx={{ color: `${Theme.Colors.primary}` }}>
          delete
        </Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </MenuItem>
          ))}
        </Menu>
      ) : null} */}
    </>
  );
};

export default Cart;
