import React, { Component } from 'react';
import axios from "axios";

export const postApi=(apiInfo,data)=>{
  return axios.post(`${process.env.REACT_APP_API_URL}${apiInfo.apiName}`,data);
}





