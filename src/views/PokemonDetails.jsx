import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailsContext } from "../context/DetailsContext";

const DetallesPokemon = () => {
  const { id } = useParams();
  const { pokemonDetails, loading, setPokemonDetails, setLoading } = useContext(DetailsContext);
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de Pokémon");
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener los detalles del Pokémon");
        }
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error("Error al obtener detalles del Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id, setPokemonDetails, setLoading]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <p>Cargando detalles del Pokémon...</p>;
  }

  const { name, height, weight, types, sprites } = pokemonDetails;

  return (
    <div>
      <div>
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Busca tu Pokémon" />
      </div>
      <nav>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1>Detalles del Pokémon: {name}</h1>
      <div className="card">
        <img src={sprites?.front_default} alt={name} />
        <div className="card-body">
          <p className="card-text">Altura: {height}</p>
          <p className="card-text">Peso: {weight}</p>
          <p className="card-text">Tipo(s): {types.map((type) => type.type.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default DetallesPokemon;