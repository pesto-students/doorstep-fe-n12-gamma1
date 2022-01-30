import React from "react";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import placeHolder from "../images/placeholder.jpg";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";
import { useNavigate } from "react-router-dom";
import CLabel from "../components/Label";
import CardContent from "../components/CardContent";
import Content from "../components/Content";
import Button from "../components/Buttons";
import CardMedia from "../components/CardMedia";
import Card from "../components/CustomCard";

export default function MediaCard(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onAddProductToCart = () => {
    dispatch(cartActions.addProductToCart(props.product));
  };

  const onViewProductDetails = () => {
    dispatch(cartActions.viewProductDetails(props.product));
    navigate("/product");
  };
  return (
    <Card>
      <CardMedia image={props.product.img || placeHolder} 
        onClick={onViewProductDetails}/>
      <CardContent>
        <CLabel>
          <h5 className="CardMainLabel">
            {props.product.title || "Product Title"}
          </h5>
        </CLabel>
        <CLabel>
          <h6 className="CardDescription">
            {props.product.description || "Space for small product description"}
          </h6>
        </CLabel>
      </CardContent>
      <CardActions>
        <Content className="cardActions">
          <Button className="cardBtn" onClick={onAddProductToCart}>
            Add to cart
          </Button>
          <Content className="costContent">
            <CLabel>
              <h3 className="costLabel">
                {props.product.discounted_price + " INR"}
              </h3>
            </CLabel>
            <br></br>
            <CLabel>
              <h6 className="strikedLabel">{props.product.price + " INR"}</h6>
            </CLabel>
          </Content>
        </Content>
      </CardActions>
    </Card>
  );
}
