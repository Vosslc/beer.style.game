import React, { Component } from "react";
import { CardList } from "./Components/CardList/card-list.Component";
import "./App.css";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: [],
      searchField: "",
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
        <div id="search-breweries">
          <InputGroup>
            <Input
              type="search"
              placeholder="Search Breweries"
              onChange={(e) => this.setState({ searchField: e.target.value })}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary">To the Right!</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <CardList breweries={this.state.breweries}></CardList>
      </div>
    );
  }
}

export default App;
