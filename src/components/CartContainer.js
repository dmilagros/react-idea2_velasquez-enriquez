import React from "react";

import { useCartContext } from "../context/CartContext";

import CartItem from "./CartItem";

const CartContainer = () => {
  const { clear } = useCartContext();
  const { cart } = useCartContext();
  console.log("cart", cart);
  return (
    <div>
      <h3>Listado de Productos</h3>
      {cart.length > 0 ? (
        <div>
          <table class="highlight">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItem product={item} />
              ))}
            </tbody>
          </table>
          <br />
          <button onClick={clear}>Limpiar carrito</button>
        </div>
      ) : (
        <p>Hay {cart.length} productos en tu carrito</p>
      )}
    </div>
  );
};

export default CartContainer;
