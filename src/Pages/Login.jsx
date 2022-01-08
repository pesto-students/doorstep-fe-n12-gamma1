import React from "react";
import GoogleLogin from "../library/components/GoogleLogin";
import Logo from "../library/components/Logo";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";

const Login = () => {
  return (
    <Content className="MainContainer" >
        <Content style={{ margin: "3rem 0 2rem 0", textAlign: "center" }}>
      <Logo width={243} height={50}/>
      <CLabel>
        <h6 style={{ fontStyle: "italic", margin: 0 }}>
          <em>We are at your service</em>
        </h6>
      </CLabel>
      </Content>
      <Content className="Container"
        style={{
          height: "60vh",
          width: "50vw",
          margin: 0,
          textAlign: "center"
        }}
      >
        <CLabel>
          <h2>Sign In</h2>
        </CLabel>
        <CLabel>
          <h6 style={{ margin: 0 }}>Welcome @DoorStep!</h6>
        </CLabel>
        <GoogleLogin>Login For Admin</GoogleLogin>
        <GoogleLogin>Login For Guest</GoogleLogin>
        <GoogleLogin>Login For User</GoogleLogin>
      </Content>
    </Content>
  );
};

export default Login;
