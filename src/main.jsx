import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Picture_provider from "./context/Picture_context.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Picture_provider>
        <App />
      </Picture_provider>
    </BrowserRouter>
  </React.StrictMode>
);
