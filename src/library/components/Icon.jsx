import * as React from "react";
import styled from "styled-components";
import Icon from "@mui/material/Icon";

const DynamicIcon = styled(({ children, props }) => {
  return <Icon {...props} style={{cursor:'pointer'}}>{children}</Icon>;
})`
`;

// const FAIcon = styled(({ children, props }) => {
//   return <Icon {...props} style={{cursor:'pointer'}}></Icon>;
// })``;

// export { FAIcon };
export default DynamicIcon;
