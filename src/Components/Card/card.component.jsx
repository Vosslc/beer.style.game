import React from "react";
import "./card.style.css"

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.brewery.id}?set=set4&size=180x180`} alt=""/>
    <h4>{props.brewery.name}</h4>
  </div>
);
