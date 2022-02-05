import React, { useState } from "react";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";
import Header from "../library/components/AdminHeader";
import Icon from "../library/components/Icon";
import Button from "../library/components/Buttons";
import { Link } from "react-router-dom";
import Theme from "../library/styleHelpers/customTheme";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <Content className="MainContainer">
        <Content className="Container ConfigurationContent">
          <CLabel>
            <h2>Page Not Found</h2>
          </CLabel>
          <Button className="Small">
            <Link to="/" label="Login">
              <CLabel className="whiteLabel">
                Go To <Icon sx={{ color: `${Theme.Colors.white}` }}>home</Icon>
              </CLabel>
            </Link>
          </Button>
        </Content>
      </Content>
    </>
  );
};

export default PageNotFound;
