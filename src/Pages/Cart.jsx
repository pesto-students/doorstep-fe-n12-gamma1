import Header from "../library/components/Header1";
import Content from "../library/components/Content";
import styled from "styled-components";

import CartGrid from "../library/components/CartGrid";
import Paper from "@mui/material/Paper";
import products from "../services/products";
import CartItem from "../library/components/CartItem";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartTable from "../library/components/CartTable";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Theme from "../library/styleHelpers/customTheme";

const Item = styled(Paper)(({ theme }) => ({
  color: "#ffddff",
}));

const Cart = () => {
  return (
    // <>
    //   <Header />
    //   <Content className="main_cart">
    //     <Content className="cart_left">
    //       <CartGrid values={products} />
    //     </Content>
    //     <Content className="cart_right">
    //       <Content style={{ display: "flex" }}>
    //         <h3>SubTotal</h3>
    //         <h3>36.99 INR</h3>
    //       </Content>
    //       <Buttons classNmae="Small">Proceed to Checkout</Buttons>
    //     </Content>
    //   </Content>
    // </>
    <Container maxWidth='false'>
      <Grid container id="container" rowSpacing={10}> 
        <Grid item id="Header" xs={12}>
          <Header/>
        </Grid>
        <Grid item id="content" xs={12}>
          <Grid container columnSpacing={5}>
            <Grid item id="table" xs={9}>
              <CartTable/>
            </Grid>
            <Grid item id="subtotal" xs={3} sx={{display:"flex", direction:"row", alignItems:"center"}}>
              <Grid container xs={12} rowSpacing={4}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={8} fullWidth>
                      <Typography variant="h5">Subtotal:</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h5">36.99 INR</Typography>
                    </Grid>
                  </Grid>
                  <Divider xs={12} textAlign="left"/>
                </Grid>
                <Grid item>
                  <Typography variant="p">Shipping and taxes will be calculated at the checkout</Typography>
                </Grid>

                <Grid item xs={12} sx={{display:"flex", alignItems:"center", direction:'column'}}>
                  <Button variant="contained" sx={{backgroundColor:Theme.Colors.primary || "#2592AA"}} fullWidth>Proceed to Checkout</Button>
                </Grid>
                

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
