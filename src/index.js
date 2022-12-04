import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { PhoneContextProvider } from "./context/PhoneContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PhoneContextProvider>
      <App />
    </PhoneContextProvider>
  </React.StrictMode>
);
