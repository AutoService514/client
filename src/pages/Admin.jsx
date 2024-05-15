import React, { useState } from "react";
import { useEffect } from "react";
import opacityAppear from "./anim";
import "../style/main_styles.css";
import CreateType from "../components/modals/CreateType";
import CreateService from "../components/modals/CreateService";
import BanUser from "../components/modals/BanUser";
import DeleteManager from "../components/modals/DeleteManager";
const Admin = () => {
  const [isOpenCreateType, setIsOpenCreateType] = useState(false);
  const [isOpenCreateService, setIsOpenCreateService] = useState(false);
  const [isOpenBanUser, setIsOpenBanUser] = useState(false);
  const [isOpenDeleteManager, setIsOpenDeleteManager] = useState(false);
  useEffect(() => {
    const wrapper = document.querySelector(".wrap-admin");
    opacityAppear(wrapper);
  }, []);

  return (
    <div className="wrap-admin">
      <div className="admin-menu">
        <ul className="menu-list">
          <li
            className="menu-list-item slide-out"
            onClick={() => setIsOpenCreateType(true)}
          >
            Додати тип
          </li>
          <li
            className="menu-list-item slide-out"
            onClick={() => setIsOpenCreateService(true)}
          >
            Додати сервіс
          </li>
          <li
            className="menu-list-item slide-out"
            onClick={() => setIsOpenBanUser(true)}
          >
            Забанити користувача
          </li>
          <li
            className="menu-list-item slide-out"
            onClick={() => setIsOpenDeleteManager(true)}
          >
            Видалити менеджера
          </li>
        </ul>
        {isOpenCreateType && (
          <div className="background-overlay">
            <CreateType setIsOpen={setIsOpenCreateType} />{" "}
          </div>
        )}
        {isOpenCreateService && (
          <div className="background-overlay">
            <CreateService setIsOpen={setIsOpenCreateService} />{" "}
          </div>
        )}
        {isOpenBanUser && (
          <div className="background-overlay">
            <BanUser setIsOpen={setIsOpenBanUser} />{" "}
          </div>
        )}
        {isOpenDeleteManager && (
          <div className="background-overlay">
            <DeleteManager setIsOpen={setIsOpenDeleteManager} />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
