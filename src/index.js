import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopStore from "./stores/ShopStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const myStore = new ShopStore();
root.render(
  <React.StrictMode>
    <App store={myStore} />
  </React.StrictMode>
);
