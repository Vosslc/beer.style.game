import React from "react";
import "./card.style.css";

const pTagFontColor = {
  color: "black",
  fontSize: "17px",
  display: "flex",
  background: "-webkit-linear-gradient(45deg, #e7d3ce 0%, #596a72 100%)",
  opacity: ".9",
  overflow: 'hidden',
};

export const Card = (props) => (
  <div className="cols">
    {/* ? ADD THIS TO THE DIV BELOW onTouchStart={this.classList.toggle('hover')} */}
    <div className="col">
      <div className="container">
        <div
          className="front"
          // style={{
          //   // *using unsplash brewery images for card background
          //   backgroundImage: `url("https://source.unsplash.com/750x450/?brewery")`,
          //   // backgroundImage: `url("https://placeimg.com/720/540/nature")`,
          // }}
        >
          <div className="inner">
            <img className="beer-img" src={props.brewery.image_url} alt="" />
            <p>{props.brewery.name}</p>
            <p>{props.brewery.tagline}</p>
          </div>
        </div>
        <div
          className="back"
          style={{
            // *using unsplash brewery images for card background
            backgroundImage: `url("https://source.unsplash.com/750x450/?brewery")`,
            // backgroundImage: `url("https://placeimg.com/720/540/nature")`,
          }}
        >
          <div className="inner">
            <div className="beer-card-description" style={pTagFontColor}>
              <p
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontFamily: "Titillium Web",
                }}
              >
                Beer Description
              </p>{" "}
              <p>
                Abv : {""}
                {props.brewery.abv}%
              </p>
              <p>
                IBU : {""}
                {props.brewery.ibu}
              </p>
              <p>
                Target OG : {""}
                {props.brewery.target_og}
              </p>
              <p>
                Target FG : {""}
                {props.brewery.target_fg}
              </p>
              {/* {props.brewery.description} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  // </div>
);
