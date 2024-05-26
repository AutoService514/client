import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../main";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  SERVICE_ROUTES,
  LOGIN_ROUTES,
  ADMIN_ROUTES,
  BASKET_ROUTES,
} from "../utils/consts";

import "../style/main_styles.css";
import { observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShoppingBag,
  faSignIn,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; 

const NavBar = observer(() => {
  const notify = () => toast.error("Ви не авторизований користувач!");
  const { user } = useContext(Context);
  let state = user.isAuth;
  const navAnimation = () => {
    const listItemNames = document.querySelectorAll(".list-item");
    if (state === user.isAuth) return;
    else {
      listItemNames.forEach((item) => {
        item.style.animation = "none";
        setTimeout(() => {
          item.style.animation = "fadeIn 0.5s ease forwards";
        }, 10);
      });
    }
  };

  return (
    <>
      <div className="navbar-container">
        {!user.isAuth ? <ToastContainer /> : null}
      </div>
      <div className="contrainer-navbar">
        <div className="navbar" onClick={navAnimation}>
          <NavLink to={SERVICE_ROUTES}>
            <li className="list-item">
              <i className="fa-solid">
                <FontAwesomeIcon icon={faHouse} />
              </i>
              <span className="list-item-name">Home</span>
            </li>
          </NavLink>
          <NavLink
            to={user.isAuth ? BASKET_ROUTES : LOGIN_ROUTES}
            onClick={() => (user.isAuth ? null : notify())}
          >
            <li className="list-item">
              <i className="fa-solid">
                <FontAwesomeIcon icon={faShoppingBag} />
              </i>
              <span className="list-item-name">Basket</span>
            </li>
          </NavLink>
          {user.isAuth ? (
            <>
              <NavLink to={ADMIN_ROUTES}>
                <li className="list-item">
                  <i className="fa-solid">
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                  <span className="list-item-name">Admin panel</span>
                </li>
              </NavLink>
              <NavLink to={LOGIN_ROUTES}>
                <li className="list-item" onClick={() => user.setIsAuth(false)}>
                  <i className="fa-solid">
                    <FontAwesomeIcon icon={faSignIn} />
                  </i>
                  <span className="list-item-name">Exit</span>
                </li>
              </NavLink>
            </>
          ) : (
            <NavLink to={LOGIN_ROUTES}>
              <li className="list-item" onClick={() => user.setIsAuth(true)}>
                <i className="fa-solid">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <span className="list-item-name">Authorisation</span>
              </li>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
});

export default NavBar;
