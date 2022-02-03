import React, { useState } from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "@mui/material/Icon";
import Theme from "../styleHelpers/customTheme";
import categories from "../../services/categories";
import DropDown from "./DropDown";
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import SearchField from "./SearchField";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import {
    createStyles,
    fade,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

  const CssTextField = withStyles({
    root: {

      '& .MuiOutlinedInput-notchedOutline':{
        borderLeft: 0,
        borderRight: 0,
        border: '0px',
        borderRadius: '0 0 0 0',
        height:'100%',

      },
    },
  })(OutlinedInput);

const Header = () => {
  return (

    <Grid container>
        <Grid item>
            <Box sx={{margin:"12px"}}>

            </Box>
        </Grid>
        <Grid item xs={12}>


    <Grid container columnSpacing={15}>
        <Grid xs={12} sm={12} md={3} item >
            <Logo className="responsiveImg" width={'100%'}/>
        </Grid>
        <Grid item xs={9} sx={{display:'flex', alignItems:'center'}}>
            <Grid container>


                <Grid item xs={10}>
                    <Grid container fullWidth >
                        <Grid item xs={9} fullWidth sx={{maxHeight:'46px',display:'flex', width: 'fit-content', border:'1px solid #EBEBEB',justifyItems:'stretch', borderRadius:'12px',alignItems:'stretch',backgroundColor:'#F9F9F9'}}>
                            <DropDown style={{borderRadius:'12px', flex:8}} values={categories} variant="outlined" />
                            <Divider orientation="vertical" variant="middle" sx={{}} flexItem/>
                            <CssTextField sx={{backgroundColor:'#F9F9F9',flex:16}} flexItem/>
                            {/* <Divider orientation="vertical" variant="middle" sx={{color:'#EBEBEB',backgroundColor:'#F9F9F9'}} flexItem/> */}
                            <Button sx={{ border:'0px solid rgba(0, 0, 0, 0.23)', borderRadius:'0 12px 12px 0', height:'100%',flex:1}}>
                                <Icon sx={{ color: 'black', fontSize: 25 }}>
                                    search
                                </Icon>
                            </Button>
                        </Grid>


                    </Grid>
                </Grid>
                <Grid item xs={2}  style={{display:'flex', alignItems:'center'}}>
                            <Grid container>
                                <Grid item xs={4} sx={{display:'flex', justifyContent:'flex-end'}}>
                                    <IconButton>
                                        <Icon sx={{ color: `${Theme.Colors.primary || '#2592AA'}`, fontSize: 30 }}>home</Icon>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} sx={{display:'flex', justifyContent:'flex-end'}}>
                                    <IconButton>
                                        <Icon sx={{ color: `${Theme.Colors.primary || '#2592AA'}`, fontSize: 30 }}>
                                            account_circle_outlined
                                        </Icon>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} sx={{display:'flex', justifyContent:'flex-end'}}>
                                    <IconButton>
                                        <Icon sx={{ color: `${Theme.Colors.primary || '#2592AA'}`, fontSize: 30 }}  color='blue'>
                                            shopping_cart_outlined
                                        </Icon>
                                    </IconButton>
                                </Grid>

                            </Grid>
                            {/* <Icon style={{color: 'blue' }}>home</Icon>
                            <Icon sx={{ color: `${Theme.Colors.primary}` }}>
                            account_circle_outlined
                            </Icon>
                            <Icon sx={{ color: `${Theme.Colors.primary}` }}>
                            shopping_cart_outlined
                            </Icon> */}

                                
                        </Grid>
                </Grid>
        </Grid>
    </Grid>
  
    </Grid>
    </Grid>
  );
};

export default Header;
