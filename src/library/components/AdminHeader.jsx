import React from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import logoImg from "../images/logo.png";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../app/reducers/authReducer";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state);
  const logout = () => {
    try {
      alert("Are you sure you want to logout?");
      window.localStorage.clear();
      window.sessionStorage.clear();
      dispatch(authActions.setAuth())
      navigate("/admin");
    } catch (error) {}
  };
  return (
    <Content className="HeaderContent">
      <Content className="HeaderLogoContainer">
        <Logo src={logoImg} className="responsiveImg" width={120} />
      </Content>
      <Content className="HeaderLogoContainer">
        <IconButton onClick={logout}>
          <Icon
            sx={{ color: `${Theme.Colors.primary || "#2592AA"}`, fontSize: 30 }}
          >
            logout_outlined
          </Icon>
        </IconButton>
      </Content>
    </Content>
  );
};

export default AdminHeader;
