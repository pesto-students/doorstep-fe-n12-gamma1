import React, { useState } from "react";
// import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styled from "styled-components";
import "../../App.css";
import Theme from "../styleHelpers/customTheme";
import Button from "./Buttons";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";

const Input = styled.input`
  border: 1px solid ${Theme.Colors.primary};
`;

const IncDec = ({ initvalue, product, ...props }) => {
  let [value, setValue] = useState(initvalue);
  let [action, setAction] = useState(null);
  const dispatch = useDispatch();
  const onRemoveProductFromCart = (product) =>
    dispatch(cartActions.removeProductFromCart(product));

  const onAddProductToCart = (product) =>
    dispatch(cartActions.addProductToCart(product));
  const data = useSelector((state) => state);
  const onIncrement = () => {
    setValue((value) => {
      value += 1;
      return value;
    });
    onAddProductToCart(product);
  };

  const onDecrement = () => {
    setValue((value) => {
      value -= 1;
      return value;
    });
    onRemoveProductFromCart(product);
  };

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
            return event.target.value;
          });
        }}
      />
      <Button
        className="IncDecBtn"
        variant="contained"
        disabled={value == 1}
        onClick={onDecrement}
      >
        -
      </Button>
    </ButtonGroup>
  );
};

export default IncDec;
