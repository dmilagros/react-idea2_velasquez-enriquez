import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";
import "./itemDetail.css";

const ItemCategory = ({ id, name, description, price, pictureUrl }) => {
  if (!name) {
    return <p>Loading...</p>;
  } else
    return (
      <div className="item">
        <section>
          <div>
            <img src={pictureUrl} alt={name} />
          </div>
          <h5>{name}</h5>
          <p>{description}</p>
          {price && <p className="price">Precio: s/ {price} </p>}
          <Link to={`/item/${id}`}>
            <button>Ver detalle del producto</button>
          </Link>
        </section>
      </div>
    );
};

export default ItemCategory;
