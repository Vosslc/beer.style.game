import React from "react";

// import { InputGroup, InputGroupAddon, Button } from "reactstrap";
import "./search-box.styles.css";
// import brewdogImg from "./brewdog.png"
export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    {/* <InputGroup>
      <InputGroupAddon addonType="append">
        <Button color="secondary">Search Beer</Button>
      </InputGroupAddon>
    </InputGroup> */}
    {/* <img src={brewdogImg} alt=""/> */}
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    
  </div>
);
