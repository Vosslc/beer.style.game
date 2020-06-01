import React, { Component } from "react";
import "./App.scss";

import { CardList } from "./Components/CardList/card-list.Component";
import { SearchBox } from "./Components/search-box/search-box";
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

  componentDidMount() {
    fetch(
      `https://api.punkapi.com/v2/beers?per_page=20&page=${this.state.beerPage}`
    )
      // fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => {
        return response.json();
      })
      .then((beers) => this.setState({ beers: beers }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    console.log(this.state.beers);
    const { beers, searchField } = this.state;
    const filteredBeers = beers.filter((beers) =>
      beers.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <div className="beer-app">
          <p className = 'app-title'> Brewdog Beer Search</p>

          <SearchBox
            placeholder="Find Beer . . ."
            handleChange={this.handleChange}
          />
        </div>
        <CardList beers={filteredBeers} />
        <button>back</button>
        <h1 className="current-page">Page: {this.state.beerPage}</h1>
        <button
          onClick={(e) => this.setState({ beerPage: this.state.beerPage + 1 })}
        >
          next
        </button>
      </div>
    );
  }
}

export default App;
