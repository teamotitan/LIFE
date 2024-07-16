import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src="/project-life.png" alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("create")}
          className={menu === "create" ? "active" : ""}
        >
          Create challenge
        </li>
      </ul>
      <Link className="navbar-button" to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
