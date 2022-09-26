import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { startListCategories } from "../firebase";

import CartWidget from "./CartWidget";

import "./navBar.css";

const NavBar = () => {
  const { cart } = useCartContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const allCategories = await startListCategories();
      setCategories(allCategories);
    } catch (error) {
      console.log("message error", error);
    }
  };

  return (
    <ul className="navigation">
      <li>
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>
      </li>
      <ul className="navigation-items">
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.id}`}>{category.type}</Link>
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
