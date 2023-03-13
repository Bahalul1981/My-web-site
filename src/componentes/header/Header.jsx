import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../property/image/logo.png";
import { Icon } from "@blueprintjs/core";
function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/man">Man</NavLink>
            </li>

            <li>
              <NavLink to="/woman">Woman</NavLink>
            </li>

            <li>
              <NavLink to="/kids">Kids</NavLink>
            </li>

            <li>
              <NavLink to="/gift-pack">Gift pack</NavLink>
            </li>
          </ul>
        </nav>

        <div className="header__auth">
          <Icon icon="search" iconSize={22} className="header-nav-search" />
          <Icon
            icon="shopping-cart"
            iconSize={22}
            className="header-nav-shopping-card"
          />
          <NavLink to="/login-reg" className="login-navBar">
            Login
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
