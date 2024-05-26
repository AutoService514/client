import React, { useState, useEffect } from "react";
import "../style/main_styles.css";
import addAnimationToElement from "./anim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Ваш кошик порожній" },
    { id: 2, text: "Ваш кошик порожній" },
  ]);

  useEffect(() => {
    const wrapper = document.querySelector(".wrap");
    addAnimationToElement(wrapper);
  }, []);

  const addItem = () => {
    const newItem = {
      id: Date.now(), // уникальный идентификатор
      text: "Ваш кошик порожній",
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
      <div className="wrap">
        <h1 className="title-basket">Кошик</h1>
        <div className="basket-container">
          {items.map(item => (
              <div className="basket-info" key={item.id}>
                <span>{item.text}</span>
                <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
          ))}
        </div>
        <button className="btn" onClick={addItem}>Add basket</button>
      </div>
  );
};

export default Cart;
