import React, { useContext, useState } from "react";
import logo from "../Images/logo2.jpeg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { storeContext } from "../Context and Reduce/StoreContext";

export default function Navbar() {
  const { products } = useContext(storeContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const list = [
    { name: "HOME", tag: "/", icon: "home" },
    { name: "ABOUT", tag: "/About", icon: "globe" },
    { name: "TEAM", tag: "/Team", icon: "children" },
    { name: "BLOGS", tag: "/Blog", icon: "comment-alt" },
    { name: "CONTACT", tag: "/Contact", icon: "envelope" },
    { name: "PRODUCTS", tag: "/Products", icon: "shopping-basket" },
  ];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar my-0" style={{ height: "50px" }}>
        <div className="w3-top">
          <div
            className="w3-bar w3-black w3-card container-fluid py-0"
            id="myNavbar"
          >
            <div className="w3-left">
              <button
                className="navbar-brand mx-2 my-0 py-0"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/");
                }}
              >
                <img
                  src={logo}
                  alt="Company logo"
                  width="70"
                  height="60"
                  className="d-inline-block align-text-top"
                />
              </button>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="w3-right w3-hide-medium w3-hide-large">
              <button
                className="w3-bar-item w3-button w3-hover-blue"
                onClick={toggleMenu}
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>

            {/* Desktop navigation links */}
            <div className="w3-right w3-hide-small">
              {list.map((item, index) => (
                <button
                  className="w3-bar-item w3-button w3-hover-blue"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(item.tag);
                  }}
                >
                  <i className={`fa fa-${item.icon}`}></i> {item.name}
                </button>
              ))}

              <HashLink
                to="/#review"
                className="w3-bar-item w3-button w3-hover-blue"
              >
                <i className="fa fa-comment"></i> REVIEWS
              </HashLink>
              <button
                className="w3-bar-item w3-button w3-hover-blue"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/Cart");
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <sup>&nbsp;&nbsp;({products.length})</sup>
              </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="w3-center w3-bar-block w3-hide-medium w3-hide-large">
                {list.map((item, index) => (
                  <button
                    className="w3-bar-item w3-button w3-hover-blue"
                    onClick={() => {
                      toggleMenu();
                      window.scrollTo(0, 0);
                      navigate(item.tag);
                    }}
                  >
                    <i className={`fa fa-${item.icon}`}></i> {item.name}
                  </button>
                ))}

                <HashLink
                  className="w3-bar-item w3-button w3-hover-blue"
                  onClick={() => {
                    toggleMenu();
                  }}
                  to={"/#review"}
                >
                  <i className="fa fa-comment"></i> REVIEWS
                </HashLink>
                <button
                  className="w3-bar-item w3-button w3-hover-blue"
                  onClick={() => {
                    toggleMenu();
                    window.scrollTo(0, 0);
                    navigate("/Cart");
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <sup>&nbsp;&nbsp;({products.length})</sup>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
