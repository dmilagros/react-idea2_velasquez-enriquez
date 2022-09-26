import React from "react";
import ItemList from "./ItemList";
import products from "../products"

const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <p>{greeting}</p>

      <ItemList />
    </div>
  );
};

export default ItemListContainer;
