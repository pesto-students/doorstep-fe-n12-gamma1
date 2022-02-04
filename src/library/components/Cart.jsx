import React from "react";
import {
  Badge,
} from "@material-ui/core";
// import ShoppingCart from "@material-ui/icons/ShoppingCart";
// import DeleteIcon from "@material-ui/icons/Delete";
// import FolderIcon from "@material-ui/icons/Folder";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data=useSelector(state => state);
  const products=data.cartReducer.products;
  const onOpenCart= () => navigate('/cart');
  const onRemoveProductFromCart= (product) =>
    dispatch(cartActions.removeProductFromCart(product));

  return (
    <>
        <Badge badgeContent={products.length} color="secondary" onClick={onOpenCart}>
          <Icon sx={{ color: `${Theme.Colors.primary}` }} >
          shopping_cart_outlined
        </Icon>
        </Badge>
      
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
