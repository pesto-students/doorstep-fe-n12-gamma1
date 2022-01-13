import { styled } from "@mui/material";
import React from "react";
import { GoogleLogin } from "react-google-login";
import Theme from "../styleHelpers/customTheme";
import ApiInfo from "../../services/ApiInfoService";
import { postApi } from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

const CustomGoogleLogin = styled(GoogleLogin)`
  width: 25vw;
  height: auto;
  margin: 10px;
  box-shadow: none !important;
  border: 1px solid ${Theme.Colors.primary}!important;
  color: ${Theme.Colors.primary}!important;
  border-radius: ${Theme.CommonTheme.borderRadius}!important;
  justify-content: center; ;
`;

const GLogin = ({ children }) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  let navigate = useNavigate();
  const onLoginSuccess = async (res) => {
    try {
      const result = await postApi(ApiInfo.login, {
        tokenId: res.tokenId,
        role: children,
      });
      children==='Admin' && navigate("/configuration");
      navigate("/error")
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onLoginFailure = (res) => {
    console.log("Login Failure", res);
  };
  return (
    <CustomGoogleLogin
      clientId={clientId}
      buttonText={`Login For ${children}`}
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GLogin;
