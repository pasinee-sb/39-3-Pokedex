import "./PokeCard.css";
import React from "react";
const PokeCard = ({ name, image, type, exp }) => {
  return (
    <div className="PokeCard">
      <img className="PokeCard-img" src={image} alt={name} />
      <div className="PokeCard-detail">
        <h1> Name : {name} </h1>
        <h2>Type : {type}</h2>
        <h2>Base Experience : {exp}</h2>
      </div>
    </div>
  );
};

export default PokeCard;
