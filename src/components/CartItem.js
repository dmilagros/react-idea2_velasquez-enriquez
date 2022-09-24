import React from "react";
import { useCartContext } from "../context/CartContext";

import "./CartItem.css";

const CartItem = ({ product }) => {
  const { removeItem } = useCartContext();
  const { item, quantity } = product;
  const { id, name, description, price, pictureUrl } = item;

  return (
    <tr>
      <td className="item-center">{id}</td>
      <td className="item-center">
        <img src={pictureUrl} alt={name} width={50} />
      </td>
      <td>{name}</td>
      <td className="item-center">{quantity}</td>
      <td className="item-center">S/ {price}</td>
      <td className="item-center">
        <button className="button-delete" onClick={() => removeItem(id)}>
          eliminar
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
