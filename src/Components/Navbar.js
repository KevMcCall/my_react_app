import React from "react";
import "../Styles/Navbar.css"

const navStyle = {
  navLinkColor: {
    color: 'white',
    
  }
};



function navbar () {
    return (
  <nav className="navbar">
    {/* Prop Styling */}
    {/* <h1 style={navStyle.headerStyle}>Hi</h1> */}
    <a href="/" style={navStyle.navLinkColor} >Home</a>
    <a href="/" style={navStyle.navLinkColor}>Contact</a>
    <a href="/" style={navStyle.navLinkColor}>About</a>
  </nav>
);
}
export default navbar;
