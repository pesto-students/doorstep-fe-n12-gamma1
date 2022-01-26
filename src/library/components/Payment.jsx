import Grid from '@mui/material/Grid';

export default function Payment(){
    return (
        <Grid container spacing={5}>
            <Grid item>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h2 style={{margin:'0',padding:'0'}}>Billing method</h2>
                </Grid>
                <Grid item xs={12}>
                    <p style={{color:"#C1C1C1",margin:'0',padding:'0'}}>Please enter your payment method</p>
                </Grid>
            </Grid>
        </Grid>
            <Grid item>
                <Grid container>

                </Grid>
            </Grid>
        </Grid>
    )
}