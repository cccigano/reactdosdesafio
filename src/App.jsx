import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones"; 
import DetallesPokemon from "./views/PokemonDetails";
import NotFound from "./views/NotFound"; 
import PokemonsProvider from "./context/PokemonsContext";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Navbar />
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <PokemonsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemones" element={<Pokemones />} /> 
              <Route path="/pokemones/:id" element={<DetallesPokemon />} />
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </PokemonsProvider>
        </div>
      </div>
    </Router>
  );
};

export default App;
