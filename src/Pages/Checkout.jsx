import Box from '@mui/material/Box';
import AddressForm from '../library/components/AddressForm';
import Addresses from '../library/components/Addresses';
import Payment from '../library/components/Payment';
import OrderSummary from '../library/components/OrderSummary';
import Header from '../library/components/Header';
import Header1 from '../library/components/Header1';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import AddressModal from '../library/components/AddressModal';

export default function CheckoutPage() {
    return (
        // <Box>
        //     <Header/>
        //     <Box sx={{display:'grid', gridTemplateColumns: '1fr 1fr'}}>
        //         <Box>
        //             <AddressForm/>
        //             <Payment/>
        //         </Box>
        //         <Box>
        //             <OrderSummary/>
        //         </Box>
        //     </Box>
        // </Box>
        <Container maxWidth="xl">

            <Grid container rowSpacing={12}>

                <Grid item xs={12}>
                    <Header1/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container columnSpacing={8}>
                            <Grid item xs={12} sm={6}>
                                <Grid container rowSpacing={3}>

                                    <Grid item>
                                        <Grid container>
                                            <Grid item>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <h2 style={{margin:'0',padding:'0'}}>Addresses</h2>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <p style={{color:"#C1C1C1",margin:'0',padding:'0'}}>Please select the address for delivery</p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Addresses/>
                                            </Grid>
                                            <Grid item>
                                                <AddressModal/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* <Grid item>
                                            <AddressForm/>
                                        </Grid> */}
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container rowSpacing={5}>
                                    <Grid item xs={12}>
                                        <OrderSummary/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Payment/>
                                     </Grid>
    
                                </Grid>
                            </Grid>
                        </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}