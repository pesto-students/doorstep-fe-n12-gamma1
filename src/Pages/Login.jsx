import React from "react";
import GoogleLogin from "../library/components/GoogleLogin";
import Logo from "../library/components/Logo";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../app/reducers/authReducer";
import logoImage from "../library/images/logo.png";



const Login = () => {
  const dispatch = useDispatch();
  dispatch(authActions.fetchAuth())
  useSelector(state => console.log(state))
  return (
    <Content className="MainContainer">
      <Content className="LogoContainer">
        <Logo className="responsiveImg" src={logoImage} width={243} />
        <CLabel className="adminLabel">
          <h6 className="ItalicFont">
            <em>We are at your service</em>
          </h6>
        </CLabel>
      </Content>
      <Content className="Container LoginContent adminTheme">
        <CLabel className="adminLabel">
          <h2>Sign In</h2>
        </CLabel>
        <CLabel className="adminLabel">
          <h6>Welcome @DoorStep!</h6>
        </CLabel>
        <GoogleLogin className="adminTheme">Admin</GoogleLogin>
        <GoogleLogin className="adminTheme">Guest</GoogleLogin>
        <GoogleLogin className="adminTheme">User</GoogleLogin>
      </Content>
    </Content>
  );
};

export default Login;
