import React from "react";
import "./navigation.css";
import NAVLOGO from "../images/nikelogo.png";
const Navigation = () => {
  return (
    <nav className="main-navbar container">
      <div>
        <img src={NAVLOGO} alt="nikelogo"></img>
      </div>
      <ul className="main-ul">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>contact</li>
      </ul>
      <button className="login-btn">Login</button>

    </nav>
  );
};
export default Navigation;
