import * as React from "react";
import CartItem from "./CartItem";
import Content from "./Content";
export default function SpacingGrid({ values, imgUrl }) {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Content className="carts">
      <Content className="cartRow">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
      </Content>

      {values.map((product) => (
        <CartItem
          key={product.id}
          imgUrl={product.imgUrl}
          title={product.title}
          description={product.description}
          sellingPrice={product.sellingPrice}
          totalPrice={product.sellingPrice}
        />
      ))}
    </Content>
  );
}

{
  /* <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {values.map((product) => (
            <Grid key={product.id} item>
              <CartItem 
                key={product.id}
                imgUrl={product.imgUrl}
                title={product.title}
                description={product.description}
                sellingPrice={product.sellingPrice}
                mrp={product.mrp}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid> */
}
