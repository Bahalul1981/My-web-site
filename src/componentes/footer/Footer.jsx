import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <>
      <hr />
      <div className="footer-main-div">
        <div className="footer-quick-links">
          <h3 className="quick-link">Quick Links</h3>
          <nav>
            <ul>
              <li>
                <NavLink className="footer-Navlink" to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className="footer-Navlink" to="/man">
                  Man
                </NavLink>
              </li>

              <li>
                <NavLink className="footer-Navlink" to="/woman">
                  Woman
                </NavLink>
              </li>

              <li>
                <NavLink className="footer-Navlink" to="/kids">
                  Kids
                </NavLink>
              </li>

              <li>
                <NavLink className="footer-Navlink" to="/gift-pack">
                  Gift pack
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-info-div">
          <div className="under-quick-links">
            <h3>Info</h3>
          </div>
          <div className="under-quick-links">About</div>
          <div className="under-quick-links">Contact us</div>
          <div className="under-quick-links">About us</div>
          <div className="under-quick-links">Shipping policy</div>
          <div className="under-quick-links">Blog</div>
        </div>
        <div className="footer-text-our-mission">
          <div className="footer-our-mission">
            <h3>Our mission and vission</h3>
          </div>
          <div className="footer-our-mission-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil
            ipsa veritatis facilis aperiam recusandae sunt ipsum animi amet sed
            consequuntur minus, a error maxime perferendis voluptatum quo cum
            nostrum.
          </div>
        </div>
        <div className="social-media-icons-in-footer">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
