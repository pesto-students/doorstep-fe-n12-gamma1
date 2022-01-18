import Content from "./Content";
import Card from "./Card";
import values from "../../services/products";
import Grid from "@mui/material/Grid";
const Products = () => {
  const spacing = 2;
  return (
    <Content>
      <Grid container spacing={2}>
        {values.map((product, index) => {
          return (
            <Card
              key={product.id}
              imgUrl={product.imgUrl}
              title={product.title}
              description={product.description}
              sellingPrice={product.sellingPrice}
              mrp={product.mrp}
            />
          );
        })}
      </Grid>
    </Content>
  );
};

export default Products;
