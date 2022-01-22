import { Checkbox } from "@mui/material";
import CLabel from "./Label";
import Content from "./Content";

const Brand = ({ checked, children }) => {
  return (
    <Content className="flexbrands">
      <Checkbox defaultChecked />
      <CLabel>{children}</CLabel>
    </Content>
  );
};

export default Brand;
