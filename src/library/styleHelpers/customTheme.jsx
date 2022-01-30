import React from 'react';
import config from "../../config.json"

let Theme= {
    Colors:{
      primary:config.result.template_Details.primaryColor,
      white:"#ffffff",
      cardTitle: "151515",
      cardDescription: "#A9A9A9",
      chipBackground: "#ECF6F6",
    tabIconDefault: '#959292',
    tabBar: '#fefefe',
    errorBackground: 'red',
    errorText: '#fff',
    warningBackground: '#EAEB5E',
    warningText: '#666804',
    noticeText: '#fff'
    },
    CommonTheme:{
      borderRadius:'14px'
    }
  };
  
  export default Theme ;
