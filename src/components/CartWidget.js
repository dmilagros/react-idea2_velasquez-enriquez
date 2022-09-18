import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <i class="small material-icons">shopping_cart</i>
    </Link>
  );
};

export default CartWidget;
