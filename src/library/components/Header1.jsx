import React, { useState } from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import categories from "../../services/categories";
import DropDown from "./DropDown";
import OutlinedInput from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import SearchField from "./SearchField";

const Header = () => {
  return (
    // <Content className="Header">
    //   <Content className="HeaderLogoContainer">
    //     <Logo className="responsiveImg" width={120} />
    //   </Content>

    //   <Content className="SearchBar">
    //     <Content className="dropdown">
    //       <DropDown values={categories} variant="outlined" />
    //     </Content>
    //     <Content className="searchfield">
    //       <SearchField />
    //     </Content>
    //   </Content>

    //   <Content className="HeaderNav">
    //     <Icon sx={{ color: `${Theme.Colors.primary}` }}>home</Icon>
    //     <Icon sx={{ color: `${Theme.Colors.primary}` }}>
    //       account_circle_outlined
    //     </Icon>
    //     <Icon sx={{ color: `${Theme.Colors.primary}` }}>
    //       shopping_cart_outlined
    //     </Icon>
    //   </Content>
    // </Content>

    <Grid container spacing={3}>
        <Grid xs={3} item style={{display:'flex' }}>
            <Logo className="responsiveImg" width={120} />
        </Grid>
        <Grid item xs={6}>
            <Grid container>
                <Grid item xs={3}>
                    <DropDown style={{borderRadius:'12px'}} values={categories} variant="outlined" />
                </Grid>
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item>
                            <OutlinedInput fullWidth sx={{ ml: 1, flex: 1, height:"100%" }} />
                            {/* <input fullWidth sx={{width:'100%', height:"100%"}}></input> */}
                        </Grid>
                        <Grid item>
                            <Button fullWidth sx={{height:'100%'}}>
                                <Icon sx={{ color: `${Theme.Colors.warningBackground}`, fontSize: 80 }}>
                                    search
                                </Icon>
                            </Button>
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Icon style={{color: 'blue' }}>home</Icon>
            <Icon sx={{ color: `${Theme.Colors.primary}` }}>
            account_circle_outlined
            </Icon>
            <Icon sx={{ color: `${Theme.Colors.primary}` }}>
            shopping_cart_outlined
            </Icon>

                
        </Grid>
    </Grid>
  );
};

export default Header;
