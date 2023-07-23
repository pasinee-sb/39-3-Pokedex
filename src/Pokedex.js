import React from "react";
import "./Pokedex.css";
import pokemons from "./pokemons";
import PokeCard from "./PokeCard";
const PokeDex = ({ index = pokemons }) => {
  return (
    <div className="Pokedex">
      {index.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.img}
          type={pokemon.type}
          exp={pokemon.base_experience}
        />
      ))}
    </div>
  );
};

export default PokeDex;
