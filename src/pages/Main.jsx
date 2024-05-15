import React, { useEffect, useState } from "react";
import image from "../assets/logoAutoServ.jpeg";
import "../style/main_styles.css";
import opacityAppear from "./anim";

const mainPage = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  useEffect(() => {
    const wrapper = document.querySelector(".wrap");

    if (!animationCompleted) {
      setTimeout(() => {
        opacityAppear(wrapper);
        setAnimationCompleted(true);
      }, 250);
    }
  }, [animationCompleted]);
  return (
    <div className="wrap">
      <div className="header">
        <div className="header-title">
          <h1 className="title-main">Welcome to <p className="title-main-p">AutoService Pro</p></h1>
        </div>
        <div className="logo">
          <img src={image} alt="main" className="img" />
        </div>
      </div>
    </div>
  );
};

export default mainPage;
