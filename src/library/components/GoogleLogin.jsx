import { styled } from "@mui/material";
import React,{useEffect} from "react";
import { GoogleLogin } from "react-google-login";
import Theme from "../styleHelpers/customTheme";
import ApiInfo from "../../services/ApiInfoService";
import { postApi } from "../../services/ApiService";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../app/reducers/authReducer";
import config from "../../config.json";

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


// function getData(){
//   return useSelector(state => console.log(state))
// }

const GLogin = ({ children }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const LoggedInUser=useSelector(state => state);
  console.log("LoggedInUser",LoggedInUser)
  const userInfo=LoggedInUser.authReducer.userInfo
  const clientId = config.result.envDetails.REACT_APP_CLIENT_ID;
  
  useEffect(() => {
    debugger;
    if (userInfo?.statusCode==200) {
       setDetailsInLocalStorage(userInfo.result)
       userInfo.result.role==='Admin' && navigate('/configuration');
       userInfo.result.role!=='Admin' && navigate('/error')
    }
    console.log("userInfo",userInfo)
  }, [navigate, userInfo]);
  
const onLoginSuccess=(res)=>{
  try {
    debugger;
  dispatch(authActions.fetchAuth({
    tokenId: res.tokenId,
    role: children,
  }))
  debugger;
}catch(error){
  alert(error)
}
}
  

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
    />
  );
};

export default GLogin;
