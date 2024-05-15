import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ServiceMarket from "./market/ServiceMarket.jsx";
import UserMarket from "./market/UserMarket.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{ user: new UserMarket(), service: new ServiceMarket() }}
  >
    <GoogleOAuthProvider clientId={import.meta.VITE_REACT_APP_GOOGLE_API_TOKEN}>
      <App />
    </GoogleOAuthProvider>
  </Context.Provider>
);
