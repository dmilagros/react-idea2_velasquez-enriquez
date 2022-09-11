import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import categories from "../categories.js";
import "./navBar.css";

const NavBar = () => {
  return (
    <ul className="navigation">
      <li>
        <a href="">
          <img src="./logo.png" alt="" />
        </a>
      </li>
      <ul className="navigation-items">
        {categories.map((category) => (
          <li>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <li className="navigation-button">
        <CartWidget />
      </li>
    </ul>
  );
};

export default NavBar;
