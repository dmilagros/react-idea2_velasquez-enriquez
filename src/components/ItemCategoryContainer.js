import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  startListProductsxCategory,
  startReadCategoryDocFirebase,
} from "../firebase";
import ItemCategory from "./ItemCategory";

const ItemCategoryContainer = () => {
  const { categoryId } = useParams() || {};
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    getCategory();
    getItem(categoryId);
  }, [categoryId]);

  // getItem con Promise
  const getItem = async (categoryId) => {
    if (categoryId) {
      try {
        const item = await startListProductsxCategory(categoryId);
        setProductsByCategory(item);
      } catch (error) {
        console.log("error getItem", error);
      }
    }
  };

  const getCategory = async () => {
    const category = await startReadCategoryDocFirebase(categoryId);
    setCategoryName(category.type);
  };

  return (
    <div>
      <h5>Categoría: {categoryName}</h5>
      <section className="item-list">
        {productsByCategory.map((product, index) => (
          <ItemCategory key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default ItemCategoryContainer;
