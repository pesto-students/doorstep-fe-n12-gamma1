import React from 'react';
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from '../styleHelpers/customTheme';

const AdminHeader=()=>{
    return (
        <Content className="HeaderContent">
          <Content className="HeaderLogoContainer">
            <Logo className="responsiveImg" width={120}  />
          </Content>
          <Content className="HeaderLogoContainer">
            <Icon sx={{ color: `${Theme.Colors.primary}`}}>account_circle_outlined</Icon>
          </Content>
        </Content>
    )
}

export default AdminHeader;
