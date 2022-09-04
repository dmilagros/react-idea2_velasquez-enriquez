import React, { useState } from "react";
import "./itemCount.css";

const ItemCounter = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);
  const [isVisible, setIsVisible] = useState(false);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    setIsVisible(false);
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
    setIsVisible(false);
  };

  const onAdd = () => {
    if (count > 0) {
      setIsVisible(true);
      setCount(0);
    }
  };

  return (
    <div className="item-counter">
      <section className="item-counter-section">
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </section>
      <button onClick={onAdd}>Agregar al carrito</button>
      {isVisible && <span>Se agregaron {count} items al carrito</span>}
    </div>
  );
};

export default ItemCounter;
