import React from "react";
import './navBar.css';
const NavBar = () => {
  return (
    <ul className="navigation">
      <li><a href=""><img src="./logo.png" alt="" /></a></li>
      <ul className="navigation-items">
        <li><a href="#"> Nosotros</a></li>
        <li><a href="#"> Vehiculos</a></li>
        <li><a href="#"> Electronica</a></li>
        <li><a href="#"> Libros</a></li>
      </ul>
      <li className="navigation-button">
        <button>Login</button>
      </li>
    </ul>
  );
};

export default NavBar;
