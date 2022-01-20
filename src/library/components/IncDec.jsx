import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styled from "styled-components";
import "../../App.css";

function IncDec({ initvalue, ...props }) {
  let [value, setValue] = React.useState(initvalue);

  let value1 = 9;
  function onIncrement() {
    setValue((value) => {
      value += 1;
      return value;
    });
    props.updateValue();
  }

  function onDecrement() {
    setValue((value) => {
      if (value <= 0) return 0;
      value -= 1;
      return value;
    });
    props.updateValue();
  }

  const buttonStyle = {
    minWidth: "1px",
    width: "16.24px",
    backgroundColor: "#2592AA",
    height: "22.5px",
    padding: "0 0 0 0",
  };

  const valueStyle = {
    textAlign: "center",
    width: "36.53px",
    border: "0px",
  };
  return (
    <ButtonGroup aria-label="outlined primary button group">
      <Button style={buttonStyle} variant="contained" onClick={onIncrement}>
        +
      </Button>
      <input
        style={valueStyle}
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
          props.updateValue();
        }}
      ></input>
      <Button style={buttonStyle} variant="contained" onClick={onDecrement}>
        -
      </Button>
    </ButtonGroup>
  );
}

export default IncDec;
