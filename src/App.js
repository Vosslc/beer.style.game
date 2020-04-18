import React, { Component } from "react";
import {CardList} from "./Components/card-list/card-list.Component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: [],
    };
  }

  componentDidMount() {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => {
        return response.json();
      })
      .then((breweries) => this.setState({ breweries: breweries }));
  }

  render() {
    console.log(this.state.breweries);
    return (
      <div className="App">
        <CardList name="brewery-names">
          <h1>Brewery</h1>
        </CardList>

        {this.state.breweries.map((brewery) => (
          <h4 key={brewery.id}>{brewery.name}</h4>
        ))}
      </div>
    );
  }
}

export default App;
