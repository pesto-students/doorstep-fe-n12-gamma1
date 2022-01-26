import Grid from '@mui/material/Grid';
import SummaryCard from './SummaryCard';
import '../../App.css'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';


export default function OrderSummary(){
    return (
        <Grid container zeroMinWidth fullWidth rowSpacing={5} wrap sx={{border:"1px solid #C1C1C1", borderRadius:"12px", maxWidth:'500px', display:'flex', alignItems:'center',padding:'16px'}}>
            <Grid item>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h2 style={{margin:'0',padding:'0'}}>Order Summary</h2>
                </Grid>
                <Grid item xs={12}>
                    <p style={{color:"#C1C1C1",margin:'0',padding:'0'}}>Price can change depending on shipping method and taxes of your state.</p>
                </Grid>
            </Grid>
        </Grid>
            <Grid item fullWidth>
                <Grid container zeroMinWidth className='example' sx={{maxHeight:'868px', overflow:'scroll'}}>
                    <Grid item>
                        <SummaryCard></SummaryCard>
                    </Grid>
                    <Grid item>
                        <SummaryCard></SummaryCard>
                    </Grid>
                    <Grid item>
                        <SummaryCard></SummaryCard>
                    </Grid>
                    <Grid item>
                        <SummaryCard></SummaryCard>
                    </Grid>
                    <Grid item>
                        <SummaryCard></SummaryCard>
                    </Grid> 
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Table zeroMinWidth fullWidth sx={{fontWeight:'bold'}}>
                    <TableRow>
                        <TableCell  sx={{fontWeight:'bold'}}>Subtotal</TableCell>
                        <TableCell  sx={{fontWeight:'bold'}}  align="right">73.98 INR</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell  sx={{fontWeight:'bold'}}>Tax</TableCell>
                        <TableCell  sx={{fontWeight:'bold'}}  align="right">17%  16.53 INR</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell  sx={{fontWeight:'bold'}}>Shipping</TableCell>
                        <TableCell  sx={{fontWeight:'bold'}}  align="right">0 INR</TableCell>
                    </TableRow>
                </Table>
            </Grid>
            <Grid item xs={12}>
                <Table zeroMinWidth fullWidth sx={{fontWeight:'bold'}}>
                    <TableRow>
                        <TableCell>
                            <Typography   sx={{fontWeight:'bold'}}>Total</Typography>
                            <Typography sx={{color:'#C1C1C1'}}>Guaranteed delivery day:  June 12, 2020</Typography>
                        </TableCell>
                        <TableCell  sx={{fontWeight:'bold'}}  align="right"><Typography variant="h6"  sx={{fontWeight:'bold'}}>73.98 INR</Typography></TableCell>
                    </TableRow>
                </Table>
            </Grid>
        </Grid>
    )
}