import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.brewery.id}?set=set4&size=180x180`}
      alt=""
    />
    <h4><strong>Brewery: </strong>{props.brewery.name}</h4>
    <p><strong>State: </strong>{props.brewery.state}</p>
  </div>
);
