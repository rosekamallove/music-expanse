import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1> {this.props.name} </h1>;
  }
}



const appDiv = document.getElementById("app");
render(<App name="tim" />, appDiv)