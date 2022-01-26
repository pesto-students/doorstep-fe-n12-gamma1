import React from "react";
import LoginPage from "./../Pages/Login";
import ConfigurationPage from "./../Pages/Configuration";
import PageNotFound from '../Pages/PageNotFound';
import Header from "../library/components/Header";
import Payment from "../library/components/Payment";
import LandingPage from "../Pages/LandingPage";
import ViewProduct from "../Pages/ViewProduct";
import Cart from "../Pages/Cart";
import CheckoutPage from "../Pages/Checkout";
import ProductDetailsPage from "../Pages/ProductDetailsPage";

// import Test from "../library/components/DropDown";
// import Test from "../library/components/Brands";
// import Test from "../library/components/Grid";
// import Test from "../library/components/Slider";
// import Test from "../library/components/Buttons";
// import Test from "../library/components/IncDec";
import Test from "../library/components/CartItem";

const Routes= [
    {
        path:'/',
        exact:true,
        component:LoginPage,
        pageTitle:'Admin SignIn'
    },
    {
        path:'/configuration',
        exact:true,
        component:ConfigurationPage,
        pageTitle:'Upload Configuration excel File'
    },
    {
        path:'/Header',
        exact:true,
        component:Header,
        pageTitle:'Admin SignIn'
    },
    {
        path:'/Payment',
        exact:true,
        component:Payment,
        pageTitle:'Admin SignIn'
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
    path: "/checkout",
    exact: true,
    component: CheckoutPage,
    pageTitle: "Cart",
  },
  {
    path: "/pd",
    exact: true,
    component: ProductDetailsPage,
    pageTitle: "Cart",
  },
  {
    path: "*",
    exact: true,
    component: PageNotFound,
    pageTitle: "Page Not Found",
  }

];
export default Routes;
