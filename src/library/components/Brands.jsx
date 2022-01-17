import { Checkbox } from "@mui/material";
import CLabel from "./Label";
import Content from "./Content";
import Brand from "./Brand";
import brands from "../../services/brands";

const Brands = ({ values }) => {
  return (
    <Content>
      <Content>
        <p>Brands</p>
      </Content>
      {brands.map((brand, index) => {
        return (
          <Brand key={brand.id}>
            <p>{brand.name}</p>
          </Brand>
        );
      })}
    </Content>
  );
};

export default Brands;
