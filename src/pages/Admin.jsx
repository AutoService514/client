import React, { useState } from "react";
import { useEffect } from "react";
import opacityAppear from "./anim";
// import "../style/admin.css";
// import "../style/anim.css";
import "../style/main_styles.css";
import Modal from "../components/modals/CreateType";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const wrapper = document.querySelector(".wrap-admin");
    opacityAppear(wrapper);
  }, []);

  return (
    <div className="wrap-admin">
      <div className="admin-menu">
        <ul className="menu-list">
          <li className="menu-list-item slide-out" onClick={()=> setIsOpen(true)}>Додати тип</li>
          <li className="menu-list-item slide-out" onClick={()=> setIsOpen(true)}>Додати сервіс</li>
          <li className="menu-list-item slide-out" onClick={()=> setIsOpen(true)}>Забанити користувача</li>
          <li className="menu-list-item slide-out" onClick={()=> setIsOpen(true)}>Видалити менеджера</li>
        </ul>
        {isOpen && <div className="background-overlay"><Modal setIsOpen={setIsOpen} /> </div>}
      </div>
    </div>
  );
};

export default Admin;
