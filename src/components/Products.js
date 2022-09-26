import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { startListCategories, uploadDocToFirebase } from "../firebase";

import 'react-toastify/dist/ReactToastify.css';
import "./products.css";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    description: "",
    pictureUrl: "",
    category: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const allCategories = await startListCategories();
      setCategories(allCategories);
      toast.success('🦄 Se agregó correctamente!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } catch (error) {
      console.log("message error", error);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const data = {
      name: productInfo.name,
      price: productInfo.price,
      description: productInfo.description,
      pictureUrl: productInfo.pictureUrl,
      category: productInfo.category,
    };
    if (
      data.name &&
      data.price &&
      data.description &&
      data.pictureUrl &&
      data.category
    ) {
      try {
        const response = await uploadDocToFirebase(data);
        setProductInfo({
          name: "",
          price: "",
          description: "",
          pictureUrl: "",
          category: "",
        });
      } catch (error) {
        console.log("message error", error);
      }
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={addProduct}>
        <div>
          <section className="section-input">
            <label htmlFor="name">Nombre</label>
            <input
              placeholder="Nombre del producto"
              id="name"
              type="text"
              required
              value={productInfo.name}
              onChange={(e) =>
                setProductInfo({ ...productInfo, name: e.target.value })
              }
            />
          </section>
          <section className="section-input">
            <label htmlFor="description">Descripción</label>
            <input
              placeholder="Descipción del producto"
              id="description"
              type="text"
              required
              value={productInfo.description}
              onChange={(e) =>
                setProductInfo({ ...productInfo, description: e.target.value })
              }
            />
          </section>
        </div>

        <div>
          <section className="section-input">
            <label htmlFor="price">Precio</label>
            <input
              placeholder="Precio del producto"
              id="price"
              type="text"
              required
              value={productInfo.price}
              onChange={(e) =>
                setProductInfo({ ...productInfo, price: e.target.value })
              }
            />
          </section>
          <section className="section-input">
            <label htmlFor="image">Imagen URL</label>
            <input
              placeholder="Imagen URL del producto"
              id="image"
              type="text"
              required
              value={productInfo.pictureUrl}
              onChange={(e) =>
                setProductInfo({ ...productInfo, pictureUrl: e.target.value })
              }
            />
          </section>
        </div>

        <div>
          <section className="section">
            {categories
              ? categories.map((category, index) => (
                  <p key={index}>
                    <label>
                      <input
                        name="type_category"
                        type="radio"
                        value={category.id}
                        required
                        onChange={(e) =>
                          setProductInfo({
                            ...productInfo,
                            category: e.target.value,
                          })
                        }
                      />
                      <span>{category.type}</span>
                    </label>
                  </p>
                ))
              : ""}
          </section>
        </div>
        <button type="submit">Guardar</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Products;
