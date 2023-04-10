import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import "../../App.css";
function Footer() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  return (
    <div>
      <div className="footer-info-link-div">
        <hr />
        {showAbout && (
          <div className="footer-info-about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              inventore est at laborum illo quia a ducimus beatae vero mollitia
              quam eum quae, provident praesentium unde ea eveniet ex nostrum.
            </p>
          </div>
        )}
        {showContact && (
          <div className="footer-info-contact">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              inventore est at laborum illo quia a ducimus beatae vero mollitia
              quam eum quae, provident praesentium unde ea eveniet ex nostrum.
            </p>
          </div>
        )}
        {showShipping && (
          <div className="footer-info-shipping">
            <h3>Shipping policy</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              inventore est at laborum illo quia a ducimus beatae vero mollitia
              quam eum quae, provident praesentium unde ea eveniet ex nostrum.
            </p>
          </div>
        )}
        {showBlog && (
          <div className="footer-info-blogg">
            <h3>Blogg</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              inventore est at laborum illo quia a ducimus beatae vero mollitia
              quam eum quae, provident praesentium unde ea eveniet ex nostrum.
            </p>
          </div>
        )}
      </div>
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
          <ul>
            <li style={{ cursor: "pointer" }}>
              <p onClick={() => setShowAbout(true)}>About</p>
            </li>
            <li style={{ cursor: "pointer" }}>
              <p onClick={() => setShowContact(true)}>Contact us</p>
            </li>
            <li style={{ cursor: "pointer" }}>
              <p onClick={() => setShowShipping(true)}>Shipping policy</p>
            </li>
            <li style={{ cursor: "pointer" }}>
              <p onClick={() => setShowBlog(true)}>Blog</p>
            </li>
            <li style={{ cursor: "pointer" }}>
              <p onClick={() => setShowBlog(true)}>Blog</p>
            </li>
          </ul>
        </div>
        <div className="footer-text-our-mission">
          <div className="footer-our-mission">
            <h3>Our mission and vission</h3>
          </div>
          <div className="footer-our-mission-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil
            ipsa veritatis facilis aperiam recusandae sunt ipsum animi amet sed
            consequuntur minus, a error maxime perferendis voluptatum quo cum
            nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam neque assumenda magni fugiat dolorum sit nulla temporibus.
            Aperiam dolores autem et exercitationem. Eaque fuga molestiae
            consectetur adipisci nemo sunt omnis!
          </div>
        </div>
        <div className="footer-text-our-mission">
          <div className="footer-our-mission">
            <h3>Social media link</h3>
          </div>
          <div className="footer-our-mission-text">
            <li>
              <a href="*">Face Book</a>
            </li>
            <li>
              <a href="*">Face Book</a>
            </li>
            <li>
              <a href="*">Face Book</a>
            </li>
            <li>
              <a href="*">Face Book</a>
            </li>
            <li>
              <a href="*">Face Book</a>
            </li>
          </div>
        </div>
      </div>
      <p className="copyright-bottom">
        Copyright © 2022 made by Dewan Fashion hub
      </p>
    </div>
  );
}

export default Footer;
