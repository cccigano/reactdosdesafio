import React, { useContext } from "react";
import { PokemonsContext } from "../context/PokemonsContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Pokemones = () => {
  const { pokemons, selectedPokemon, setSelectedPokemon } = useContext(PokemonsContext);
  const navigate = useNavigate();

  const goToDetails = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    } else {
      Swal.fire("¡Error!", "Tienes que seleccionar un Pokémon", "error");
    }
  };

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="pokemones">
      <h1>Selecciona un Pokémon</h1>
      <section>
        <select
          className="pokemonSelect"
          value={selectedPokemon}
          onChange={({ target }) => handleSelectPokemon(target.value)}
        >
          <option value="" disabled>
            Selecciona un Pokémon
          </option>
          {pokemons.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <article>
          <button className="btn btn-secondary" onClick={goToDetails}>
            Vista
          </button>
        </article>
      </section>
    </div>
  );
};

export default Pokemones;
