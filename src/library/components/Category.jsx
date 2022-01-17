import { Chip } from "@mui/material";
import CLabel from "./Label";
import Content from "./Content";

const Category = ({ name, label, children }) => {
  return (
    <Content className="flex">
      <CLabel>{name}</CLabel>
      <Chip clickable label={label} size="small"></Chip>
    </Content>
  );
};

export default Category;
