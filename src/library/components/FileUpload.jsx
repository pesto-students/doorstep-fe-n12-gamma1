import React, { useRef } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Theme from "../styleHelpers/customTheme";
import Button from "./Buttons";
import Icon from "./Icon";
import CLabel from "./Label";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: `${Theme.Colors.primary}`,
      borderRadius: `${Theme.CommonTheme.borderRadius}`,
      marginRight: "15px",
    },
    "& .MuiOutlinedInput-input": {
      color: `${Theme.Colors.primary}`,
      padding: "14.5px 9px",
    },
    "& input[type=file]::file-selector-button": {
      color: `${Theme.Colors.primary}`,
      borderWidth: "1px",
      borderStyle: "thin",
      borderColor: `${Theme.Colors.primary}`,
      boxShadow: "none",
      borderRightColor: `${Theme.Colors.primary}`,
    },
  },
});

const FileUpload = styled((props) => {
  return (
    <CssTextField
      {...props}
      id="file-upload"
      type="file"
      accept=".xlsx, .xls, .csv"
    />
  );
})`
  & {
    height: ${(props) => props.style?.height};
    width: ${(props) => props.style?.width};
    margin-right: 10px;
    text-align: ${(props) => props.style?.textAlign};
  }
`;

export default FileUpload;
