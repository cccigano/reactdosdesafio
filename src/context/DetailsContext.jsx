
import React, { createContext, useState } from "react";

export const DetailsContext = createContext();

const DetailsProvider = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(false); 

  return (
    <DetailsContext.Provider value={{ pokemonDetails, loading, setPokemonDetails, setLoading }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;