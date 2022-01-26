import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import IncDec from './IncDec';

export default function SummaryCard(){
    let props={
        farm: "Tharamis Farm",
        freshness: "1 day old",
    }
    return (
        <Card sx={{padding:'5px', borderBottom:'1px solid #C1C1C1'}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Grid container spacing={2} fullWidth>
                        <Grid item fullWidth>
                            <CardMedia
                                component="img"
                                height="104"
                                image='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                                sx={{borderRadius:"12px"}}
                                alt="Paella dish"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={'3px'}>
                        <Grid item xs={12}>
                            <Typography variant="body1" sx={{fontWeight:"bold"}} color="text.primary">
                                Product Title
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <table style={{padding:'0px', margin:'0px'}}>
                                <tr>
                                    <td style={{color:'#C1C1C1'}}>Farm:</td>
                                    <td>{props.farm}</td>
                                </tr>
                                <tr>
                                    <td style={{color:'#C1C1C1'}}>Freshness:</td>
                                    <td>{props.freshness}</td>
                                </tr>
                            </table>    
                        </Grid>
                        <Grid item xs={12}>
                        <Rating></Rating>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant="h6">36.99 INR</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="p" sx={{color:"#C1C1C1"}}>48.56 INR</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{display:'flex', alignItems:'center'}}>
                                    <IncDec initvalue={0}></IncDec>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
            </Grid>

            {/* <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent> */}
            <CardActions>
            </CardActions>    
        </Card>
    );
}