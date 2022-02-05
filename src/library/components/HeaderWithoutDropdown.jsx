import React, { useState } from "react";
import Logo from "./Logo";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Theme from "../styleHelpers/customTheme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import config from "../../config.json";

import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user =
    window.localStorage.getItem("user") !== null
      ? JSON.parse(window.localStorage.getItem("user"))
      : null;
  const [loggedIn, setLoggedIn] = useState(user ? true : false);
  const logo = config.result.template_Details.logoUrl;
  const logout = () => {
    try {
      alert("Are you sure you want to logout?");
      window.localStorage.clear();
      window.sessionStorage.clear();
      navigate("/");
    } catch (error) {}
  };

  const goToLandingPage = () => {
    navigate("/home");
  };

  return (
    <Grid container>
      <Grid item>
        <Box sx={{ margin: "12px" }}></Box>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          columnSpacing={1}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <Grid
            xs={10}
            sm={10}
            md={10}
            item
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Logo
              src={logo}
              className="responsiveImg"
              width={120}
              fullwidth={1}
            />
          </Grid>
          <Grid container xs={2}>
            <Grid
              item
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Grid container>
                <Grid
                  item
                  xs={4}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <IconButton onClick={goToLandingPage}>
                    <Icon
                      sx={{
                        color: `${Theme.Colors.primary || "#2592AA"}`,
                        fontSize: 30,
                      }}
                    >
                      home
                    </Icon>
                  </IconButton>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  {loggedIn ? (
                    <IconButton onClick={logout}>
                      <Icon
                        sx={{
                          color: `${Theme.Colors.primary || "#2592AA"}`,
                          fontSize: 30,
                        }}
                      >
                        logout_outlined
                      </Icon>
                    </IconButton>
                  ) : (
                    <IconButton>
                      <Icon
                        sx={{
                          color: `${Theme.Colors.primary || "#2592AA"}`,
                          fontSize: 30,
                        }}
                      >
                        account_circle_outlined
                      </Icon>
                    </IconButton>
                  )}
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <IconButton>
                    <Cart />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
