import React, { useRef } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Theme from "../styleHelpers/customTheme";
import Icon from "./Icon";
import { fontSize } from "@mui/system";
import Content from "../components/Content";

const CssTextField = styled(TextField)({
  "& ": {
    width: "100%",
  },
  "& .MuiOutlinedInput-root": {
    "&": {
      height: "20px",
    },
    "&:focus-visible": {
      // outline: "none",
    },
    "& fieldset": {
      borderColor: `${Theme.Colors.primary}`,
      borderRadius: `${Theme.CommonTheme.borderRadius}`,
      fontSize: "14%",
      height: "23px",
      padding: "3px",
    },
    "& fieldset:focus-visible": {
      // outline: "none",
      // background: "blue",
    },
  },
});

const SearchBox = styled((props) => {
  const handleSearchBtnClick = () => {};
  return (
    <>
      <CssTextField
        placeholder="Search Products, Categories "
        type="text"
        onKeyUp={handleSearchBtnClick}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Icon
                sx={{
                  color: `${Theme.Colors.primary}`,
                  fontSize: 80,
                }}
              >
                search
              </Icon>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
})`
  &&
    .MuiFormControl-root.MuiTextField-root.sc-dlVxhl.ePbdyQ.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
  &&
    .MuiFormControl-root.MuiTextField-root.sc-dlVxhl.ePbdyQ.css-1u3bzj6-MuiFormControl-root-MuiTextField-root:focus-visible {
  }
`;

export default SearchBox;
