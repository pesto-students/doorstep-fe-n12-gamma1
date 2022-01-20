import React from "react";
import LoginPage from "./../Pages/Login";
import ConfigurationPage from "./../Pages/Configuration";
import PageNotFound from "../Pages/PageNotFound";
import LandingPage from "../Pages/LandingPage";
import ViewProduct from "../Pages/ViewProduct";
import Cart from "../Pages/Cart";

// import Test from "../library/components/DropDown";
// import Test from "../library/components/Brands";
// import Test from "../library/components/Grid";
// import Test from "../library/components/Slider";
// import Test from "../library/components/Buttons";
// import Test from "../library/components/IncDec";
import Test from "../library/components/CartItem";

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
    path: "/product",
    exact: true,
    component: ViewProduct,
    pageTitle: "Product",
  },
  {
    path: "/cart",
    exact: true,
    component: Cart,
    pageTitle: "Cart",
  },
  {
    path: "*",
    exact: true,
    component: PageNotFound,
    pageTitle: "Page Not Found",
  },
];
export default Routes;
