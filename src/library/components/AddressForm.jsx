import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextBox from './TextBox';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/InputBase';

export default function AddressForm(){
    return (
        // <Box>
        // <Box>
        //     <h1>Billing Info</h1>
        //     <p style={{color:"#C1C1C1"}}>Please enter your billing info</p>
        // </Box>
        // <Box style={{display:'grid', gridTemplateColumns:"1fr 1fr", gridGap:"10%"}}>

        //     <TextField id="outlined-basic" label="First name" variant="outlined" style={{width:"100%"}}/>

        //     <TextField id="outlined-basic" label="Last name" variant="outlined" style={{width:"100%"}}/>

        //     <TextField id="outlined-basic" label="Email address" variant="outlined" style={{width:"100%"}}/>

        //     <TextField id="outlined-basic" label="Phone number" variant="outlined" style={{width:"100%"}}/>

        //     <TextField id="outlined-basic" label="Address" variant="outlined" style={{width:"100%"}}/>

        //     <TextField id="outlined-basic" label="Town/city" variant="outlined" style={{width:"100%"}}/>

        //     <TextField id="outlined-basic" label="State/Country" variant="outlined" style={{width:"100%"}}/>

        //     <TextField id="outlined-basic" label="Zip/Postal code" variant="outlined" style={{width:"100%"}}/>            
        // </Box>
        // </Box>
        <Grid container spacing={5}>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h2 style={{margin:'0',padding:'0'}}>Billing Info</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <p style={{color:"#C1C1C1",margin:'0',padding:'0'}}>Please enter your billing info</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="First name" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="Last name" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="Email address" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="Phone number" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="Town/City" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="State/Country" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sm="" zeroMinWidth fullwidth={1}>
                    {/* <InputLabel sx={{fontWeight: 'bold'}}>First name</InputLabel> */}
                    <TextField id="outlined-basic" label="Zip/Postal code" variant="outlined" fullwidth={1}/>
            </Grid>

        </Grid>

            </Grid>
        </Grid>
            )
}