import React,{useState} from "react";
// import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styled from "styled-components";
import "../../App.css";
import Theme from "../styleHelpers/customTheme";
import Button from "./Buttons";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";

const Input=styled.input`
border: 1px solid ${Theme.Colors.primary};
`;

const IncDec=({ initvalue,product, ...props })=>{
  let [value, setValue] = useState(initvalue);
  let [action, setAction] = useState(null);
  const dispatch = useDispatch();
  const onRemoveProductFromCart= (product) =>dispatch(cartActions.removeProductFromCart(product));

  const onAddProductToCart = (product) => dispatch(cartActions.addProductToCart(product)); 
  const data = useSelector((state) => state);
    const productList = data.cartReducer.products; 
    // console.log("productList",productList)
  
  const onIncrement=()=>{
    setValue((value) => {
      value += 1;
      return value;
    });
    onAddProductToCart(product)
    // props.onUpdateValue(action);
  }

  const onDecrement=()=>{
    setValue((value) => {
      value -= 1;
      return value;
    });
    onRemoveProductFromCart(product);
    // props.onUpdateValue(action);
  }

  // const buttonStyle = {
  //   minWidth: "1px",
  //   width: "16.24px",
  //   backgroundColor: `${Theme.Colors.primary}`,
  //   height: "22.5px",
  //   padding: "0 0 0 0",
  // };

  // const valueStyle = {
  //   textAlign: "center",
  //   width: "36.53px",
  //   border: `1px solid ${Theme.Colors.primary}`
  // };
  return (
    <ButtonGroup aria-label="outlined primary button group">
      <Button className="IncDecBtn" variant="contained" onClick={onIncrement}>
        +
      </Button>
      <Input
        className="IncInput"
        type="number"
        value={value}
        onChange={(event) => {
          setValue(() => {
            if (isNaN(event.target.value) || event.target.value < 0) {
              event.target.value = 0;
            }
            console.log(event.target.value);
            return event.target.value;
          });
          // props.updateValue(action);
        }}
      />
      <Button className="IncDecBtn" variant="contained" disabled={value==1} onClick={onDecrement}>
        -
      </Button>
    </ButtonGroup>
  );
}

export default IncDec;
