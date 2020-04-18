import React, { Component } from "react";
import { CardList } from "./Components/card-list/CardList/card-list.Component";
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
        <CardList breweries={this.state.breweries}></CardList>
      </div>
    );
  }
}

export default App;
