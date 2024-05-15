import React, { useEffect } from "react";
import "../style/main_styles.css";
import addAnimationToElement from "./anim";
import TypeList from "../components/TypeList";

const Service = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".service-wrap");
    addAnimationToElement(wrapper);
  }, []);
  return (
    <div className="service-wrap">
      <div className="service-menu">
        <TypeList></TypeList>
      </div>
    </div>
  );
};

export default Service;
