import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLinks">
        <div className="navbarLinksLogo">
          <img src={logo} alt="" />
        </div>
        <div className="navbarLinksContainer">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
