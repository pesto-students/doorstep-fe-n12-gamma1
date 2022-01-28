import React, { useRef } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
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
      // background: "red",
      height: "20px",
    },
    "&:focus-visible": {
      // background: "red",
      // height: "20px",
      outline: "none",
    },
    "& fieldset": {
      borderColor: `${Theme.Colors.primary}`,
      fontSize: "14%",
      height: "23px",
      // border: "1px solid red",
      padding: "3px",
    },
    "& fieldset:focus-visible": {
      outline: "none",
      background: "blue",
    },

    //   '&:hover fieldset': {
    //     borderColor: 'yellow',
    //   },
    //   '&.Mui-focused fieldset': {
    //     borderColor: 'green',
    //   },
  },
});

const SearchBox = styled((props) => {
  //   const fileInputField = useRef(null);

  const handleSearchBtnClick = () => {};
  return (
    <>
      <CssTextField
        placeholder="Search Products, Categories "
        type="text"
        onKeyUp={handleSearchBtnClick}
      />
      <Content className="searchIcon">
        <Icon
          sx={{ color: `${Theme.Colors.warningBackground}`, fontSize: "80" }}
        >
          search
        </Icon>
      </Content>
    </>
  );
})`
  & {
    height: ${(props) => props.style?.height};
    width: ${(props) => props.style?.width};
    margin: ${(props) => props.style?.margin};
    text-align: ${(props) => props.style?.textAlign};
  }
  && .Small {
    width: 15rem;
    height: auto;
    margin: 5px;
  }

  && .Large {
    width: 25rem;
    height: auto;
    margin: 10px;
  }

  &&
    .MuiFormControl-root.MuiTextField-root.sc-dlVxhl.ePbdyQ.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
  &&
    .MuiFormControl-root.MuiTextField-root.sc-dlVxhl.ePbdyQ.css-1u3bzj6-MuiFormControl-root-MuiTextField-root:focus-visible {
    background: red;
    outline: none;
  }
`;

export default SearchBox;
