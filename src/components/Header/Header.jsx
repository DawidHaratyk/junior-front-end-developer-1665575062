import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__user-container">
        <img src={user} alt="user" className="header__user-image" />
      </div>
    </div>
  );
}

export default Header;
