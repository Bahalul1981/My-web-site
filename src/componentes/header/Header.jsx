import "./Header.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUser } from "../state/userSlice";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    dispatch(setUser(null));
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="header__main-div">
        <div className="header__logo">
          <img
            src={process.env.PUBLIC_URL + "/property/image/logo.png"}
            alt="Logo"
          />
        </div>

        <nav
          className={`header__nav ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <ul className="header__nav-list">
            <li>
              <NavLink to="/" onClick={handleMobileMenuClick}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/men" onClick={handleMobileMenuClick}>
                Men
              </NavLink>
            </li>

            <li>
              <NavLink to="/woman" onClick={handleMobileMenuClick}>
                Woman
              </NavLink>
            </li>

            <li>
              <NavLink to="/kids" onClick={handleMobileMenuClick}>
                Kids
              </NavLink>
            </li>

            <li>
              <NavLink to="/gift-pack" onClick={handleMobileMenuClick}>
                Gift pack
              </NavLink>
            </li>
            <li style={{ cursor: "pointer" }}>
              <NavLink to="/items" onClick={handleMobileMenuClick}>
                <Icon icon="shopping-cart" />
              </NavLink>
            </li>
            <li style={{ cursor: "pointer" }}>
              <Icon icon="search" />
            </li>
          </ul>
        </nav>

        <div className="header__login">
          {user ? (
            <h2 onClick={handleLogout} style={{ cursor: "pointer" }}>
              Log out
            </h2>
          ) : (
            <NavLink to="/login-reg" className="login-navBar">
              Log in
            </NavLink>
          )}
          {user && <p>{user}</p>}
        </div>
        <Icon
          className="header__burger-menu"
          icon="menu"
          iconSize={22}
          onClick={handleMobileMenuClick}
        />
      </header>
    </div>
  );
}

export default Header;
