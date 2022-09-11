import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "../products"

const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <p>{greeting}</p>

      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
