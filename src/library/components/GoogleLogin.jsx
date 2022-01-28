import { styled } from "@mui/material";
import React from "react";
import { GoogleLogin } from "react-google-login";
import Theme from "../styleHelpers/customTheme";
import ApiInfo from "../../services/ApiInfoService";
import { postApi } from "../../services/ApiService";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../app/reducers/authReducer";


const CustomGoogleLogin = styled(GoogleLogin)`
  width: 25vw;
  height: auto;
  margin: 10px;
  box-shadow: none !important;
  border-radius: ${Theme.CommonTheme.borderRadius}!important;
  justify-content: center;
  border: 1px solid ${Theme.Colors.primary}!important;
  color:${Theme.Colors.adminPrimary}!important;
`;



const GLogin = ({ children,props }) => {
    const dispatch = useDispatch();
  
  // const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientId=config.result.envDetails.REACT_APP_CLIENT_ID
  let navigate = useNavigate();
  const onLoginSuccess = async (res) => {
    try {
      // const result = await postApi(ApiInfo.login, {
      //   tokenId: res.tokenId,
      //   role: children,
      // });
      // dispatch(authActions.loginRequest({tokenId: res.tokenId,role: children}))
      debugger;
      dispatch(authActions.fetchAuth({tokenId: res.tokenId,role: children}))
      // useSelector(state => console.log(state))
      // setDetailsInLocalStorage(result.data.result)
      children==='Admin' && navigate('/configuration');
      children!=='Admin' && navigate('/error')
    } catch (error) {
      console.log("Error", error);
    }
  };

  const setDetailsInLocalStorage=(result)=>{
    console.log("result",result)
    window.localStorage.setItem("user", JSON.stringify(result));
    window.localStorage.setItem("token", JSON.stringify(result.token));
  }

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
      {...props}
    />
  );
};

export default GLogin;
