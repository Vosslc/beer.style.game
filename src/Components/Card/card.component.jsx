import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      // src={`https://robohash.org/${props.brewery.id}?set=set4&size=180x180`}
      // src={`https://images.punkapi.com/v2/${props.brewery.id.image_url}`}
      // src={`https://images.punkapi.com/${props.brewery.id.image_url}`}
      alt=""
    />
    <img className="beer-img" src={props.brewery.image_url}/>
    <p><strong>Beer: </strong>{props.brewery.name}</p>
    <p><strong>Tagline: </strong>{props.brewery.tagline}</p>
    <p><strong>Description: </strong>{props.brewery.description}</p>
  </div>
);
