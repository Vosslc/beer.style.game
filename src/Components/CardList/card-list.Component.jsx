import React from "react";
import { Card } from "../Card/card.component";
import "./card-list.style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.beers.map((brewery) => (
      // <h4 key={brewery.id}>{brewery.name}</h4>
      <Card key={brewery.id} brewery={brewery} />
    ))}
  </div>
);
