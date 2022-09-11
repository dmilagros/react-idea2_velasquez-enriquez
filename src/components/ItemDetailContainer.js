import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import products from "../products";

const ItemDetailContainer = () => {
	const { id } = useParams()
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem().then((data) => {
      if (data) {
        setItem(data);
				console.log('data', data)
      }
    });
  }, []);

  // getItem con Promise
  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
				console.log('timeout');
        resolve(products.find((p) => p.id == id));
      }, 2000);
    });
  };

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
