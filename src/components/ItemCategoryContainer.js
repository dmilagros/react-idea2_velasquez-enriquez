import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemCategory from "./ItemCategory";
import categories from "../categories";

const ItemCategoryContainer = () => {
	const { categoryId } = useParams()
  const [item, setItem] = useState({});

  console.log('categoryId', categoryId)
  console.log('categories', categories)

  useEffect(() => {
    getItem().then((data) => {
      if (data) {
        setItem(data);
      }
    });
  }, []);

  // getItem con Promise
  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
				console.log('timeout');
        resolve(categories.find((c) => c.id == categoryId));
      }, 2000);
    });
  };

  return <ItemCategory item={item} />;
};

export default ItemCategoryContainer;
