import React from "react";
import GoogleLogin from "../library/components/GoogleLoginForAdmin";
import Logo from "../library/components/Logo";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";
import logoImg from "../library/images/logo.png";

const Login = () => {
  return (
    <Content className="MainContainer">
      <Content className="LogoContainer">
        <Logo src={logoImg} className="responsiveImg" width={243} />
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
        <GoogleLogin>Admin</GoogleLogin>
      </Content>
    </Content>
  );
};

export default Login;
