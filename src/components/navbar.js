import React, { useContext, useState, useEffect } from "react";
import logo from "../Images/logo2.jpeg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { auth, db } from "../Firebase/firebase"; // Firebase auth and Firestore
import { getDoc, doc } from "firebase/firestore"; // Firestore doc fetching
import { storeContext } from "../Context and Reduce/StoreContext";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Navbar() {
  const { products } = useContext(storeContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Track logged-in user
  const [userName, setUserName] = useState(""); // Track user's name from Firestore

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

  useEffect(() => {
    // Firebase user observer
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the logged-in user

        // Fetch user data from Firestore
        const userDocRef = doc(db, "Users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserName(userDocSnap.data().name); // Set user's name
        }
      } else {
        setUser(null); // No user is logged in
        setUserName(""); // Reset userName if logged out
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null); // Reset user state after logging out
      setUserName(""); // Reset userName on logout
      navigate("/"); // Redirect to home page after logout
      toast.success("User logged out successfully");
    });
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
                <LazyLoadImage
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
                  key={index}
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

              {/* Cart Icon */}
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

              {/* User Dropdown */}
              {user ? (
                <div className="w3-dropdown-hover w3-hover-blue">
                  <button className="w3-button w3-hover-blue w3-black">
                    <i className="fa fa-user"></i> {userName}
                  </button>
                  <div className="w3-dropdown-content w3-bar-block w3-card-1">
                    <div>
                      <button
                        className="w3-bar-item w3-button w3-hover-blue w3-black text-white ps-4"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  className="w3-bar-item w3-button w3-hover-blue"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="w3-center w3-bar-block w3-hide-medium w3-hide-large">
                {list.map((item, index) => (
                  <button
                    key={index}
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

                {/* Cart Icon for mobile */}
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

                {/* Display login/logout for mobile */}
                {user ? (
                  <button
                    className="w3-bar-item w3-button w3-hover-blue"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="w3-bar-item w3-button w3-hover-blue"
                    onClick={() => {
                      toggleMenu();
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
