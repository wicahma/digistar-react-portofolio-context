import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProviderWrapper from "./ProviderWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderWrapper />
  </React.StrictMode>
);
