import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  const { name, sprites, video } = mockPokemonData;
  return (
    <div className="poke-card">
      <h1>{name}</h1>
      <div>
        <img src={sprites.front_default} alt={name + " Front Default"} />
        <img src={sprites.front_shiny} alt={name + " Front Shiny"} />
      </div>
      <a href={video} target="_blank" rel="noreferrer">
        Video
      </a>
    </div>
  );
};

export default PokeCard;
