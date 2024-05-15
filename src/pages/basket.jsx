import React, { useEffect } from "react";
import "../style/main_styles.css";
import addAnimationToElement from "./anim";

const Cart = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrap");
    addAnimationToElement(wrapper);
  }, []);
  return (
    <div className="wrap">
      <h1 className="title-basket">Корзина</h1>
    </div>
  );
};

export default Cart;
