import React, { createContext, useEffect, useState } from "react";

export const PokemonsContext = createContext();

const PokemonsProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("");

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const respuesta = await fetch(
                    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
                );
                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista de Pokemones");
                }
                const data = await respuesta.json();
                setPokemons(data.results);
            } catch (error) {
                console.error("Error al obtener Pokemones:", error);
            }
        };
        getPokemons();

    }, []);

    const handleSelectPokemon = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    return (
        <PokemonsContext.Provider value={{ pokemons, selectedPokemon, handleSelectPokemon }}>
            {children}
        </PokemonsContext.Provider>
    );
};

export default PokemonsProvider;