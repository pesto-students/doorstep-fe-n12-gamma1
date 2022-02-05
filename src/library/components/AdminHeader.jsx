import React from "react";
import Logo from "./Logo";
import Content from "./Content";
import Icon from "./Icon";
import Theme from "../styleHelpers/customTheme";
import { useNavigate } from "react-router-dom";
import logoImg from "../images/logo.png";
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from "react-redux";
// import { logoutActions } from "../../app/reducers/logoutReducer";

const AdminHeader = () => {
  const navigate=useNavigate();
  // const dispatch = useDispatch();
  const data=useSelector(state => state);
  console.log("data",data)
  const logout=()=>{
    console.log("Logout")
    try{
      alert("Are you sure you want to logout?")
    // dispatch(logoutActions.fetchLogout())
    window.localStorage.clear();
    window.sessionStorage.clear();
    navigate("/admin")
    }catch(error){

    }
  }
  return (
    <Content className="HeaderContent">
      <Content className="HeaderLogoContainer">
        <Logo src={logoImg} className="responsiveImg" width={120} />
      </Content>
      <Content className="HeaderLogoContainer">
      <IconButton onClick={logout}>
                                        <Icon sx={{ color: `${Theme.Colors.primary || '#2592AA'}`, fontSize: 30 }}>
                                            logout_outlined
                                        </Icon>
                                    </IconButton>
        {/* <Icon onClick={logout} sx={{ color: `${Theme.Colors.primary}` }}>account_circle</Icon> */}
      </Content>
    </Content>
  );
};

export default AdminHeader;
