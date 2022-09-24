import React from "react";

import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

import "./CartContainer.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { clear, totalItems, cart, totalPrice } = useCartContext();

  return (
    <div>
      <h3>Listado de Productos</h3>
      {cart.length > 0 ? (
        <div className="container-table">
          <table class="highlight">
            <thead>
              <tr>
                <th>Código</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItem product={item} />
              ))}
              <tr>
                <td></td>
                <td></td>
                <td className="item-right">TOTAL</td>
                <td className="item-center">{totalItems}</td>
                <td className="item-center">S/ {totalPrice}</td>
                <td className="item-center"></td>
              </tr>
            </tbody>
          </table>
          <br />
          <section className="section-cart-button">
            <button className="button-clear" onClick={clear}>
              Limpiar carrito
            </button>
            <button className="button-clear" /* onClick={clear} */>
              terminar compra
            </button>
          </section>
        </div>
      ) : (
        <>
          <p>Hay {cart.length} productos en tu carrito</p>
          <Link to="/">regresar al home</Link>
        </>
      )}
    </div>
  );
};

export default CartContainer;
