import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PokemonsProvider from "./context/PokemonsContext.jsx";
import DetailsProvider from "./context/DetailsContext.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonsProvider>
      <DetailsProvider>
        <App />
      </DetailsProvider>
    </PokemonsProvider>
  </React.StrictMode>
);