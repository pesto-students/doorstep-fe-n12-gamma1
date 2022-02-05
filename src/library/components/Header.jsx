import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Theme from "../styleHelpers/customTheme";
import DropDown from "./Dropdown";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import config from "../../config.json";
import { categoryActions } from "../../app/reducers/categoryReducer";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { productActions } from "../../app/reducers/productReducer";
import { filterActions } from "../../app/reducers/filterReducer";
import { authActions } from "../../app/reducers/authReducer";

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderLeft: 0,
      borderRight: 0,
      border: "0px",
      borderRadius: "0 0 0 0",
      height: "100%",
    },
  },
})(OutlinedInput);

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user =
    window.localStorage.getItem("user") !== null
      ? JSON.parse(window.localStorage.getItem("user"))
      : null;
  const [loggedIn, setLoggedIn] = useState(user ? true : false);
  const data = useSelector((state) => state);
  const categoryList = data.categoryReducer.categoryList.result;
  const productList = data.productReducer.productList.result;

  const fetchData = () => {
    let apiName;
    dispatch(filterActions.filterBySearchField(searchData));
    if (data.filterReducer.selectedCategory)
      apiName = `user/productList?prefix=${config.result.prefix}&category=${data.filterReducer.selectedCategory}&productName=${searchData}`;
    else
      apiName = `user/productList?prefix=${config.result.prefix}&productName=${searchData}`;
    dispatch(
      productActions.fetchProduct({
        apiName: apiName,
      })
    );
  };

  useEffect(() => {
    dispatch(categoryActions.fetchCategory());
  }, []);
  const logo = config.result.template_Details.logoUrl;
  const logout = () => {
    try {
      alert("Are you sure you want to logout?");
      window.localStorage.clear();
      window.sessionStorage.clear();
      dispatch(authActions.setAuth())
      navigate("/");
    } catch (error) {}
  };

  const goToLandingPage = () => {
    navigate("/home");
  };

  const resetFilter = () => {
    dispatch(filterActions.resetfilter());
    setSearchData("");
  };

  return (
    <Grid container>
      <Grid item>
        <Box sx={{ margin: "12px" }}></Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container columnSpacing={1}>
          <Grid
            xs={12}
            sm={12}
            md={2}
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
          <Grid item xs={10} sx={{ display: "flex", alignItems: "center" }}>
            <Grid container>
              <Grid item xs={10}>
                <Grid container fullwidth={1}>
                  <Grid
                    item
                    xs={9}
                    fullwidth={1}
                    sx={{
                      maxHeight: "46px",
                      display: "flex",
                      width: "fit-content",
                      border: "1px solid #EBEBEB",
                      justifyItems: "stretch",
                      borderRadius: "12px",
                      alignItems: "stretch",
                      backgroundColor: "#F9F9F9",
                    }}
                  >
                    <DropDown
                      style={{ borderRadius: "12px", flex: 8 }}
                      values={categoryList}
                      variant="outlined"
                    />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <CssTextField
                      sx={{ backgroundColor: "#F9F9F9", flex: 16 }}
                      value={searchData}
                      onChange={(event) => setSearchData(event.target.value)}
                    />

                    <IconButton
                      onClick={fetchData}
                      sx={{
                        backgroundColor: `${Theme.Colors.primary}`,
                        border: "0px solid rgba(0, 0, 0, 0.23)",
                        borderRadius: "0 12px 12px 0",
                        height: "100%",
                        flex: 1,
                      }}
                    >
                      <Icon sx={{ color: "black", fontSize: 25 }}>search</Icon>
                    </IconButton>
                  </Grid>
                  {data.filterReducer.selectedCategory ||
                  data.filterReducer.searchField ? (
                    <Grid item>
                      <IconButton onClick={resetFilter}>
                        <Icon
                          sx={{
                            color: `${Theme.Colors.primary || "#2592AA"}`,
                            fontSize: 30,
                          }}
                        >
                          cancel_outlined
                        </Icon>
                      </IconButton>
                    </Grid>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
              <Grid
                item
                xs={2}
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
    </Grid>
  );
};

export default Header;
