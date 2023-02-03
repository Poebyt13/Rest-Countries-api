import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Normalize.css";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { CountryContextProvider } from "./Context/CountryContextProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CountryContextProvider>
    </CountryContextProvider>
  </BrowserRouter>
);
