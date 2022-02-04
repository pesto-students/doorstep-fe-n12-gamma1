import React from "react";
import LoginPage from "./../Pages/Login";
import ConfigurationPage from "./../Pages/Configuration";
import PageNotFound from '../Pages/PageNotFound';
import Payment from "../library/components/Payment";
import LandingPage from "../Pages/LandingPage";
import Cart from "../Pages/Cart";
import CheckoutPage from "../Pages/Checkout";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import OrderHistory from "../Pages/OrderHistory";
import OrderDetails from "../Pages/OrderDetails";
import Modal from "../library/components/Modal1";

// import Test from "../library/components/DropDown";
// import Test from "../library/components/Brands";
// import Test from "../library/components/Grid";
// import Test from "../library/components/Slider";
// import Test from "../library/components/Buttons";
// import Test from "../library/components/IncDec";
// import Test from "../library/components/CartItem";
import Test from "../Pages/OrderHistory";

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
    path: "/modal",
    exact: true,
    component: Modal,
    pageTitle: "Upload Configuration excel File",
  },
  {
    path: "/orderDetails",
    exact: true,
    component: OrderDetails,
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
    component: ProductDetailsPage,
    pageTitle: "Product",
  },
  {
    path: "/orders",
    exact: true,
    component: OrderHistory,
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
    path: "*",
    exact: true,
    component: PageNotFound,
    pageTitle: "Page Not Found",
  }

];
export default Routes;
