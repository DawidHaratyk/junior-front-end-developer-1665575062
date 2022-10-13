import React from "react";
import logo from "../../assets/logo.png";
import image from "../../assets/user.png";
import UserImage from "../UserImage/UserImage";

const userImageStyles = {
  borderColor: "#242325",
};

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <UserImage image={image} styles={userImageStyles} />
    </div>
  );
}

export default Header;
