import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

//Setting up a class in react:
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <HomePage/>
    ); //embedding javascript code into the the return statement
  }
}



const appDiv = document.getElementById("app");
render(<App />, appDiv);