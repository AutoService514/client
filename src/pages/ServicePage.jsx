import React, { useContext, useEffect, useState } from "react";
import ServiceMarket from "../market/ServiceMarket";
import "../style/main_styles.css";
import opacityAppear from "./anim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServicePage = () => {
  const [service, setService] = useState(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const state = useContext(Context);
  const isLogin = state.user.isAuth;
  const notify = () => toast("Товар доданий у кошик!");
  useEffect(() => {
    const wrapper = document.querySelector(".service-container");
    const serviceMarket = new ServiceMarket();
    const serviceId = window.location.pathname.split("/")[2];
    const serviceData = serviceMarket
      .getServices()
      .find((service) => service.id === parseInt(serviceId));

    if (!serviceData) {
      console.log("Service not found");
      return;
    }

    setService(serviceData);

    if (!animationCompleted) {
      setTimeout(() => {
        opacityAppear(wrapper);
        setAnimationCompleted(true);
      }, 250);
    }
  }, [animationCompleted]);

  return (
    <div className="service">
      <ToastContainer />

      <div className="service-container">
        <div className="service-img">
          {service && <img src={service?.imgSrc} alt="" className="img" />}
        </div>

        <div className="service-info">
          <h2 className="service-title">Характеристики</h2>
          <h3 className="service-h3"> Назва сервісу:</h3>
          <div className="service-name"> {service?.title}</div>
          <h3 className="service-h3"> Опис сервісу:</h3>
          <div className="service-description"> {service?.description}</div>
          <h3 className="service-h3">
            <div className="service-price">Ціна: {service?.price + " грн"}</div>
          </h3>
          {isLogin ? (
            <div onClick={notify} className="list-item-bag">
              <i className="fa-solid">
                <FontAwesomeIcon icon={faShoppingBag} />
              </i>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
