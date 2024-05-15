import React, { useContext, useState, useEffect } from "react";
import { Context } from "../main";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useHistory } from "react-router-dom";
import { SERVICE_ROUTES } from "../utils/consts";

const TypeList = observer(() => {
  const history = useHistory();
  const { service } = useContext(Context);
  const types = toJS(service.getTypes());
  const services = toJS(service.getServices());
  const [selectedTypeId, setSelectedTypeId] = useState(null);

  const toggleServices = (typeId) => {
    setSelectedTypeId((prevId) => (prevId === typeId ? null : typeId));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".menu-list")) {
        setSelectedTypeId(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="menu-list-container">
      <ul className="menu-list">
        {types.map((type) => (
          <li
            className={`menu-list-item ${
              selectedTypeId === type.id ? "slide-in" : "slide-out"
            }`}
            onClick={() => toggleServices(type.id)}
            key={type.id}
          >
            {type.title}
            {selectedTypeId === type.id && (
              <div className="dropdown-content">
                <ul>
                  {services
                    .filter((service) => service.typeId === type.id)
                    .map((service) => (
                      <span
                        className="menu-list-link"
                        key={service.id}
                        onClick={() =>
                          history.push(SERVICE_ROUTES + "/" + service.id)
                        }
                      >
                        <li key={service.id} className="menu-list-items">
                          {service.title}
                          {/* <span className="service-icon">{service.icon}</span> */}
                        </li>
                      </span>
                    ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      {selectedTypeId !== null && <div className="background-overlay"> </div>}
    </div>
  );
});

export default TypeList;
