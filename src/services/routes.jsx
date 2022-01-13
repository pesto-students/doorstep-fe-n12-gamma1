import React from 'react';
import LoginPage from "./../Pages/Login";
import ConfigurationPage from "./../Pages/Configuration";
import PageNotFound from '../Pages/PageNotFound';

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
        path:'*',
        exact:true,
        component:PageNotFound,
        pageTitle:'Page Not Found'
    },

]
  export default Routes ;