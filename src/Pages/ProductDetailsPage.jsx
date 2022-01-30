import Grid from '@mui/material/Grid';
import Tabs from '../library/components/Tabs';
import Box from '@mui/material/Box';
import Content from "../library/components/PDContent";
import Images from '../library/components/PDImages';
import Header from "./../library/components/Header";

export default function PD(){

    return (
        // <>
        // <Box sx={{ display: 'grid'}}>
        // <Header/>
        // <Box sx={{ display: 'grid' ,gridTemplateColumns: "1fr 1fr", gridGap:"10px",justifyItems:'stretch', padding:'16px'  }}>
        //     <Box sx={{display: 'grid', justifyItems:'stretch'}}>
        //         <Box>
        //             <Content/>
        //         </Box>
        //         <Box sx={{}}>
        //             <h1> <Tabs/></h1>
        //         </Box>
        //     </Box>
        //     <Box sx={{display: 'grid', justifyItems:'end', paddingRight:'10%' }}>
        //         <Images/>
        //     </Box>
        // </Box>
        // </Box>
        // </>

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