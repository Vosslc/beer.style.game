import React, { Component } from "react";
import { CardList } from "./Components/CardList/card-list.Component";
import "./App.css";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

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
        <div id="search-beers">
          <InputGroup>
            <Input
              type="search"
              placeholder="Find Beer . . ."
              onChange={(e) => this.setState({ searchField: e.target.value })}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Search Beer</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <CardList beers={filteredBeers}></CardList>
      </div>
    );
  }
}

export default App;
