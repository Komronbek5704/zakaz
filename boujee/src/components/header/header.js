// Header.jsx
import React from "react";
import "./header.css";
import logo from "../assests/left.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header_section">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="header_text">
          <p className="text_active">Home</p>
          <p className="text">Product</p>
          <p className="text">Faq</p>
          <p className="text">Contact</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
