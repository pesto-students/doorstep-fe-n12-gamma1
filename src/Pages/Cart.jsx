import Header from "../library/components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CartTable from "../library/components/CartTable";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "../library/components/Buttons";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../app/reducers/cartReducer";



const Cart = () => {
  const data = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productList = data.cartReducer.products;
  let subTotal = productList.map(product=>product.total).reduce((prev,next)=>prev+next);
  const tax = (subTotal * 12) / 100;
  const totalPayment=Math.round(subTotal+tax);
  const navigateToCheckout=()=>{
    dispatch(cartActions.addPaymentInfo({amount:subTotal,tax:tax,total:totalPayment}));
    navigate('/checkout');
  }
  return (

    <Container maxWidth="false" justify="center">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item  xs={12}>
          <Grid container columnSpacing={5}>
            <Grid item  xs={9}>
              <CartTable />
            </Grid>
            <Grid item  xs={3} sx={{display:"flex", direction:"row", alignItems:"center"}}>
              <Grid item xs zeroMinWidth container xs={12} rowSpacing={4}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={8} fullwidth={1}>
                      <Typography variant="h5">Subtotal:</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h5">{subTotal} INR</Typography>
                    </Grid>
                  </Grid>
                  {/* <Divider item xs={12} textAlign="left"/> */}
                </Grid>
                <Grid >
                  <Typography variant="p">Shipping and taxes will be calculated at the checkout</Typography>
                </Grid>

                <Grid item xs={12} sx={{display:"flex", alignItems:"center", direction:'column'}}>
                  <Button variant="contained"  fullwidth={1} onClick={navigateToCheckout}>Proceed to Checkout</Button>
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
