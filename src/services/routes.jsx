import React from 'react';
import LoginPage from "./../Pages/Login";
import ConfigurationPage from "./../Pages/Configuration";
import PageNotFound from '../Pages/PageNotFound';
import Header from "../library/components/Header";
import Payment from "../library/components/Payment";

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
        path:'*',
        exact:true,
        component:PageNotFound,
        pageTitle:'Page Not Found'
    },

]
  export default Routes ;