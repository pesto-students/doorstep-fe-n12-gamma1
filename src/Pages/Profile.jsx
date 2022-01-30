import React from "react";
import Header from "./../library/components/Header";
import Content from "../library/components/Content";
import profile from "../services/profile.json";
import Theme from "../library/styleHelpers/customTheme";

import Icon from "../library/components/Icon";

const Profile = () => {
  const { name, email, phone } = profile;
  return (
    <>
      <Header />
      <Content className="main_content">
        <Content className="profile">
          <h3>Profile Details</h3>
          <hr />
          <h4>{name}</h4>
          <h4>
            <Icon sx={{ color: `${Theme.Colors.primary}` }}>mail_outlined</Icon>
            {email}
          </h4>
          <h4>
            <Icon sx={{ color: `${Theme.Colors.primary}` }}>call_outlined</Icon>
            {phone}
          </h4>
        </Content>
      </Content>
    </>
  );
};

export default Profile;
