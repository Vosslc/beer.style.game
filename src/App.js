import React, { Component } from "react";
import "./App.css";

import { CardList } from "./Components/CardList/card-list.Component";
import { SearchBox } from "./Components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      // fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => {
        return response.json();
      })
      .then((beers) => this.setState({ beers: beers }));
  }

  render() {
    console.log(this.state.beers);
    const { beers, searchField } = this.state;
    const filteredBeers = beers.filter((beers) =>
      beers.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <div id="beers-app">
          <SearchBox
            placeholder="Find Beer . . ."
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
        </div>
        <CardList beers={filteredBeers} />
      </div>
    );
  }
}

export default App;
