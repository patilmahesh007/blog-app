import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();

  const isBlogPage = location.pathname.includes("blog");

  const navbarData = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];

  return (
    <div
      className="navbar-body"
      style={{
        backgroundColor: isBlogPage ? "black" : "white",
        color: isBlogPage ? "aquamarine" : "black",
      }}
    >
      <div className="navbar-parent-container">
        <div className="navbar-child-container"></div>
        <div className="navbar-child-container2">
          {navbarData.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "inherit" }
              }
              className="navlink"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
