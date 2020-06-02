import React from "react";
import "./card.style.css";

export const Card = (props) => (
  // <div className="card-container">
  //   <img
  //     // src={`https://robohash.org/${props.brewery.id}?set=set4&size=180x180`}
  //     // src={`https://images.punkapi.com/v2/${props.brewery.id.image_url}`}
  //     // src={`https://images.punkapi.com/${props.brewery.id.image_url}`}
  //     alt=""
  //   />
  //   <img className="beer-img" src={props.brewery.image_url} alt=""/>
  //   <p><strong>Beer: </strong>{props.brewery.name}</p>
  //   <p><strong>Abv: </strong>{props.brewery.abv}%</p>
  //   <p><strong>Tagline: </strong>{props.brewery.tagline}</p>
  //   <p className="beer-card-description"><strong>Description: </strong>{props.brewery.description}</p>
  // </div>

  // <div className="wrapper, card-container">
    <div className="cols">
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            className="front"
            style={{
              backgroundImage: `url("https://placeimg.com/720/540/nature")`,
            }}
          >
            <div className="inner">
            <img className="beer-img" src={props.brewery.image_url} alt="" />
              <p>{props.brewery.name}</p>
              <p>{props.brewery.tagline}</p>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>Beer Description: </p>

              <p className="beer-card-description">
                {" "}
                {props.brewery.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  // </div>
);
