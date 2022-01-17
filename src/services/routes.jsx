import React from "react";
import LoginPage from "./../Pages/Login";
import ConfigurationPage from "./../Pages/Configuration";
import PageNotFound from "../Pages/PageNotFound";
import LandingPage from "../Pages/LandingPage";

// import Test from "../library/components/DropDown";
// import Test from "../library/components/Brands";
import Test from "../library/components/Category";

const Routes = [
  {
    path: "/",
    exact: true,
    component: LoginPage,
    pageTitle: "Admin SignIn",
  },
  {
    path: "/configuration",
    exact: true,
    component: ConfigurationPage,
    pageTitle: "Upload Configuration excel File",
  },
  {
    path: "/test",
    exact: true,
    component: Test,
    pageTitle: "Upload Configuration excel File",
  },
  {
    path: "/home",
    exact: true,
    component: LandingPage,
    pageTitle: "Home",
  },
  {
    path: "*",
    exact: true,
    component: PageNotFound,
    pageTitle: "Page Not Found",
  },
];
export default Routes;
