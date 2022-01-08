import { styled } from "@mui/material";
import React from "react";
// , { useState }
import { GoogleLogin } from "react-google-login";
import Colors from "../styleHelpers/customTheme";

const CustomGoogleLogin = styled(GoogleLogin)`
  width: 25vw;
  height: auto;
  margin: 10px;
  box-shadow: none !important;
  border: 1px solid ${Colors.primary}!important;
  color: ${Colors.primary}!important;
  border-radius: 14px !important;
  justify-content: center; ;
`;

const GLogin = ({ children }) => {
  const clientId =
    "737423385254-lolcijd6n4834nn94heseis2gptsashc.apps.googleusercontent.com";
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
      isSignedIn={true}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GLogin;
