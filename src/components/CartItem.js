import React from "react";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ product }) => {
	const { removeItem } = useCartContext();
  const { item, quantity } = product;
  const { id, name, description, price, pictureUrl } = item;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>S/ {price}</td>
      <td>
        <img src={pictureUrl} alt={name} width={50} />
      </td>
      <td>{quantity}</td>
      <td><button onClick={() => removeItem(id)}>eliminar</button></td>
    </tr>
  );
};

export default CartItem;
