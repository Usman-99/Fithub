import React, { useState } from "react";
import logo from "../Images/logoalt.jpg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const list = [
    { name: "HOME", tag: "/", icon: "home" },
    { name: "ABOUT", tag: "/About", icon: "globe" },
    { name: "TEAM", tag: "/Team", icon: "children" },
    { name: "CONTACT", tag: "/Contact", icon: "envelope" },
    { name: "PREDICT", tag: "/VoiceRecorder", icon: "search" },
  ];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar my-0" style={{ height: "50px" }}>
        <div className="w3-top">
          <div
            className="w3-bar w3-white w3-card container-fluid py-0 pt-1"
            id="myNavbar"
          >
            <div className="w3-left">
              <button
                className="navbar-brand mx-2 my-0 py-0 "
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/");
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  width="60"
                  height="40"
                  class="my-0 mb-3 py-0 d-inline-block"
                />
                <b className="text-black w3-xxlarge mx-0">Analyzer</b>
              </button>
            </div>

            {/* Hamburger menu for mobile */}
            <div className="w3-right w3-hide-medium w3-hide-large">
              <button
                className="w3-bar-item w3-button w3-hover-red"
                onClick={toggleMenu}
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>

            {/* Desktop navigation links */}
            <div className="w3-right w3-hide-small">
              {list.map((item, index) => (
                <button
                  className="w3-bar-item w3-button w3-hover-red"
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
                className="w3-bar-item w3-button w3-hover-red"
              >
                <i className="fa fa-comment"></i> REVIEWS
              </HashLink>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="w3-center w3-bar-block w3-hide-medium w3-hide-large">
                {list.map((item, index) => (
                  <button
                    className="w3-bar-item w3-button w3-hover-red"
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
                  className="w3-bar-item w3-button w3-hover-red"
                  onClick={() => {
                    toggleMenu();
                  }}
                  to={"/#review"}
                >
                  <i className="fa fa-comment"></i> REVIEWS
                </HashLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
