import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, name, description, price, pictureUrl }) => {
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

export default Item;
