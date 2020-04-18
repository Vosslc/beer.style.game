import React from "react";

import "./card-list.style.css";

export const CardList = props => (
  <div className="card-list">
    {props.breweries.map(brewery => (
      <h4 key={brewery.id}>{brewery.name}</h4>
    ))}
  </div>
);
