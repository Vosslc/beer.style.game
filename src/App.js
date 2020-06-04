import React, { Component } from "react";
import "./App.scss";

import { CardList } from "./Components/CardList/card-list.Component";
import { SearchBox } from "./Components/search-box/search-box";
import { MDBBtn } from "mdbreact";
// import beerImg from "./Assets/AppAssests/beerImg.jpg"

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      searchField: "",
      beerPage: 1,
    };
  }

  componentDidMount = () => {
    this.getBeerPage();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.beerPage !== this.state.beerPage) {
      this.getBeerPage();
    }
  };
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  getBeerPage = () => {
    fetch(
      `https://api.punkapi.com/v2/beers?per_page=10&page=${this.state.beerPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((beers) => this.setState({ beers: beers }));
  };

  render() {
    const { beers, searchField } = this.state;
    const filteredBeers = beers.filter((beers) =>
      beers.name.toLowerCase().includes(searchField.toLowerCase())
    );

    let { beerPage } = this.state;
    const showBackbtn = () => {
      if (beerPage >= 2) {
        return (
          <MDBBtn
          className = "back-btn"
            color="info"
            onClick={(e) =>
              this.setState({ beerPage: this.state.beerPage - 1 })
            }
          >
            {" "}
            Back{" "}
          </MDBBtn>
        );
      } else {
        return;
      }
    };

    return (
      <div className="App">
        <div className="beer-app">
          <p className="app-title"> Brewdog Beer Search</p>

          <SearchBox
            placeholder="Find Beer . . ."
            handleChange={this.handleChange}
          />
        </div>
        <CardList beers={filteredBeers} />
        <div className="pageBtns">
          {showBackbtn()}
          <h1 className="current-page">Page: {this.state.beerPage}</h1>

          <MDBBtn
            className="next-btn"
            color="info"
            onClick={(e) =>
              this.setState({ beerPage: this.state.beerPage + 1 })
            }
          >
            Next
          </MDBBtn>
        </div>
      </div>
    );
  }
}

export default App;
