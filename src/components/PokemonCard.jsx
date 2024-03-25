import React from "react";

const PokemonCard = ({ name, height, weight, types }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Altura: {height}</p>
        <p className="card-text">Peso: {weight}</p>
        <p className="card-text">Tipos: {types.map((type) => type.type.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
