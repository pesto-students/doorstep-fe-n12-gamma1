import React, { Component } from "react";
import axios from "axios";

export const postApi = (apiInfo, data) => {
  let axiosConfig = null;
  if (apiInfo.header && window.localStorage.getItem("token") !== null) {
    axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        auth: JSON.parse(window.localStorage.getItem("token")),
      },
    };
  }
  return axios.post(
    `${process.env.REACT_APP_API_URL}${apiInfo.apiName}`,
    data,
    axiosConfig
  );
};
