import React from "react";
import CartWidget from "./CartWidget";
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
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Ropa</a>
        </li>
        <li>
          <a href="#">Accesorios</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <li className="navigation-button">
        <CartWidget />
      </li>
    </ul>
  );
};

export default NavBar;
