import React from "react";
import GoogleLogin from "../library/components/GoogleLogin";
import Logo from "../library/components/Logo";
import config from "../config.json";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";

const Login = () => {
  const logo = config.result.template_Details.logoUrl;
  const vendorName = config.result.vendorName;
  return (
    
    <Content className="MainContainer">
      {/* <Snackbar/> */}
      <Content className="LogoContainer">
        <Logo src={logo} className="responsiveImg" width={243} />
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
          <h6>Welcome {vendorName}</h6>
        </CLabel>
        <GoogleLogin>Guest</GoogleLogin>
        <GoogleLogin>User</GoogleLogin>
      </Content>
    </Content>
  );
};

export default Login;
