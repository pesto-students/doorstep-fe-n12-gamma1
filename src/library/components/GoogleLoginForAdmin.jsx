import { styled } from "@mui/material";
import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../app/reducers/authReducer";
import config from "../../config.json";
import Button from "../components/Buttons"

const CustomGoogleLogin = styled(GoogleLogin)`
  width: 25vw;
  height: auto;
  margin: 10px;
  box-shadow: none !important;
  border: 1px solid ${Theme.Colors.primary}!important;
  color: ${Theme.Colors.primary}!important;
  border-radius: ${Theme.CommonTheme.borderRadius}!important;
  justify-content: center; 
`;

const GLogin = ({ children }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const LoggedInUser = useSelector((state) => state);
  const userInfo = LoggedInUser.authReducer.userInfo;
  const clientId = config.result.envDetails.REACT_APP_CLIENT_ID;

  useEffect(() => {
    if (
      userInfo && userInfo.statusCode === 200 &&
      window.localStorage.getItem("token") === null
    ) {
      window.localStorage.setItem("user", JSON.stringify(userInfo.result));
      window.localStorage.setItem(
        "token",
        JSON.stringify(userInfo.result.token)
      );
      userInfo.result.role === "Admin" && navigate("/configuration");
      userInfo.result.role === "Guest" && navigate("/configuration");
      if (userInfo.result.role !== "Admin" && userInfo.result.role !== "User" && userInfo.result.role !== "Guest")
        navigate("/error");
    }
  }, [userInfo]);

  const onGuestLogin = (res) => {
    
    let apiDdata = {
        tokenId: "",
        role: "GuestAdmin",
      };
    try {
      dispatch(authActions.fetchAuth(apiDdata));
   
    } catch (error) {
      alert(error);
    }
  };

  const onLoginSuccess = (res) => {
 
    let apiDdata = {
      tokenId: res.tokenId,
      role: children,
    };
    try {
    
      dispatch(authActions.fetchAuth(apiDdata));
   
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
    <CustomGoogleLogin
      clientId={clientId}
      buttonText={`Login For ${children}`}
      onSuccess={onLoginSuccess}
      cookiePolicy={"single_host_origin"}
    />
    <Button className="googleBtn" onClick={onGuestLogin}>Login For Guest</Button>
    </>
  );
};

export default GLogin;
