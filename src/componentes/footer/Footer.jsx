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
    <>
      <hr />
      {showAbout && (
        <div>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            inventore est at laborum illo quia a ducimus beatae vero mollitia
            quam eum quae, provident praesentium unde ea eveniet ex nostrum.
          </p>
        </div>
      )}
      {showContact && (
        <div>
          <h3>Contact</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            inventore est at laborum illo quia a ducimus beatae vero mollitia
            quam eum quae, provident praesentium unde ea eveniet ex nostrum.
          </p>
        </div>
      )}
      {showShipping && (
        <div>
          <h3>Shipping policy</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            inventore est at laborum illo quia a ducimus beatae vero mollitia
            quam eum quae, provident praesentium unde ea eveniet ex nostrum.
          </p>
        </div>
      )}
      {showBlog && (
        <div>
          <h3>Blogg</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            inventore est at laborum illo quia a ducimus beatae vero mollitia
            quam eum quae, provident praesentium unde ea eveniet ex nostrum.
          </p>
        </div>
      )}

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
            nostrum.
          </div>
        </div>
        <div className="social-media-icons-in-footer">
          <div className="">Jello</div>
          <div className="">Jello</div>
          <div className="">Jello</div>
          <div className="">Jello</div>
          <div className="">Jello</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
