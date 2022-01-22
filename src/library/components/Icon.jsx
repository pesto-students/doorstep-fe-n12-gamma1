import * as React from "react";
import styled from "styled-components";
import Icon from "@mui/material/Icon";

const DynamicIcon = styled(({ children, props }) => {
  return <Icon {...props}>{children}</Icon>;
})``;
export default DynamicIcon;
