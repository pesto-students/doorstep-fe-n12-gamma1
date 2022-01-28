import Box from '@mui/material/Box';
import AddressForm from '../library/components/AddressForm';
import Payment from '../library/components/Payment';
import OrderSummary from '../library/components/OrderSummary';
import Header from '../library/components/Header';
import Grid from '@mui/material/Grid';

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
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
            <Grid container columnSpacing={8}>
                    <Grid item xs={12} sm={6}>
                        <Grid container rowSpacing={3}>
                            <Grid item>
                                <AddressForm/>
                            </Grid>
                            <Grid item>
                                <Payment/>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <OrderSummary/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}