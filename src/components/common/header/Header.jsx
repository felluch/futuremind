import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { auth } from "../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = ({ onLogin, onLogout }) => {
  const [click, setClick] = useState(false);
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
    onLogout();
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile">
                    <img
                      src={user.photoURL || 'default-profile.png'}
                      alt="Profile"
                      className="profile-pic"
                    />
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/get-certificate" className="nav-item">
                GET CERTIFICATE
              </Link>
            </li>
          </ul>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
