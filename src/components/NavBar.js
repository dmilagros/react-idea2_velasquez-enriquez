import React from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";

import CartWidget from "./CartWidget";
import categories from "../categories.js";
import "./navBar.css";

const NavBar = () => {
  const { cart } = useCartContext();

  return (
    <ul className="navigation">
      <li>
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>
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
        {cart.length > 0 && <span className="navigation-count">{cart.length}</span>}
      </li>
    </ul>
  );
};

export default NavBar;
