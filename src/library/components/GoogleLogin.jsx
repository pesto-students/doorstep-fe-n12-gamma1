import { styled } from "@mui/material";
import React from "react";
// , { useState }
import { GoogleLogin } from "react-google-login";
import Theme from "../styleHelpers/customTheme";


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
  const clientId =process.env.REACT_APP_CLIENT_ID;
  //   const [showLoginButton, setShowLoginButton] = useState(true);
  //   const [showLogoutButton, setShowLogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    // setShowLoginButton(false);
    // setShowLogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failure", res);
  };

  //   const onLogout = () => {
  //     alert("You have been signed out successfully");
  //     // setShowLoginButton(true);
  //     // setShowLogoutButton(false);
  //   };
  return (
    <CustomGoogleLogin
      clientId={clientId}
      buttonText={children}
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GLogin;
