import React, { useRef } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Theme from "../styleHelpers/customTheme";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: `${Theme.Colors.primary}`,
      borderRadius: `${Theme.CommonTheme.borderRadius}`,
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

  const handleUploadBtnClick = () => {};
  return (
    <>
      <CssTextField
        placeholder="Enter Data"
        type="text"
        onKeyUp={handleUploadBtnClick}
      />
      <p>Image</p>
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
`;

export default SearchBox;
