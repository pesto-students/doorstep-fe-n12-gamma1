import React, { useState } from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import categories from "../../services/categories";
import DropDown from "./DropDown";
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import SearchField from "./SearchField";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

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
        borderRadius: '0 0 0 0',

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


    <Grid container columnSpacing={10}>
        <Grid xs={2} item >
        <Logo className="responsiveImg" width={'100%'}/>
        </Grid>
        <Grid item xs={10}>
            <Grid container fullWidth columnSpacing={5}>
                <Grid item xs={10} sx={{display:'flex', direction:'column', justifyContent:'center'}}>
                <Grid container sx={{maxHeight:'50px'}}>
                    <Grid item xs={2}>
                        <DropDown style={{borderRadius:'12px'}} values={categories} variant="outlined" />
                    </Grid>
                    <Grid item xs={10}>

                        <Grid container>
                            <Grid item xs={11}>
                                <CssTextField sx={{maxHeight:'50px'}} fullWidth/>
                            </Grid>
                            {/* <Grid item>
                            <Divider orientation="vertical" variant="middle"/>
                            </Grid> */}
                            <Grid item xs={1}>
                                <Button fullWidth sx={{height:'100%', border:'1px solid rgba(0, 0, 0, 0.23)', borderRadius:'0 12px 12px 0'}}>
                                    <Icon sx={{ color: `${Theme.Colors.warningBackground}`, fontSize: 80 }}>
                                        search
                                    </Icon>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                </Grid>

                <Grid item xs={2}  style={{display:'flex', alignItems:'center'}}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Icon style={{color: 'blue' }}>home</Icon>
                        </Grid>
                        <Grid item xs={4}>
                            <Icon sx={{ color: `${Theme.Colors.primary}` }}>
                                account_circle_outlined
                            </Icon>
                        </Grid>
                        <Grid item xs={4}>
                            <Icon sx={{ color: `${Theme.Colors.primary}` }}>
                                shopping_cart_outlined
                            </Icon>
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
