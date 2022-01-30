import Grid from '@mui/material/Grid';
import Tabs from '../library/components/Tabs';
import Content from "../library/components/PDContent";
import Images from '../library/components/PDImages';
import Header from "./../library/components/Header";

export default function ProductDetailsPage(){

    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item>
                <Grid container columnSpacing={8} zeroMinWidth>
                    <Grid item xs={12} sm={6}>
                        <Grid container rowSpacing={8}>
                            <Grid item>
                                <Content/>
                            </Grid>
                            <Grid item>
                                <Tabs/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}  style={{display:'flex', alignItems:'center', flexDirection: 'column'}}>
                        <Images zeroMinWidth fullwidth={1}/>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
} 