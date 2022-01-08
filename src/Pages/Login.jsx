import React from "react";
import GoogleLogin from "../library/components/GoogleLogin";
import Logo from "../library/components/Logo";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";

const Login = () => {
  return (
    <Content className="MainContainer">
      <Content className="LogoContainer">
        <Logo width={243} height={50} />
        <CLabel>
          <h6 className="ItalicFont">
            <em>We are at your service</em>
          </h6>
        </CLabel>
      </Content>
      <Content className="Container LoginContent">
        <CLabel>
          <h2>Sign In</h2>
        </CLabel>
        <CLabel>
          <h6>Welcome @DoorStep!</h6>
        </CLabel>
        <GoogleLogin>Login For Admin</GoogleLogin>
        <GoogleLogin>Login For Guest</GoogleLogin>
        <GoogleLogin>Login For User</GoogleLogin>
      </Content>
    </Content>
  );
};

export default Login;
