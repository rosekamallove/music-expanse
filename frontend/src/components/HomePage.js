import React, { Component } from "react";
import RoomJoinPage from "./RommJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //react routers:
      //instead of returning the html we are goig to return a router which will refidrect us to the correct page
      <Router>
        <Switch>
          <Route exact path='/'>
            <p>This is the HomePage</p>
          </Route>
          <Route path='/join' component={RoomJoinPage}/>
          <Route path='/create' component={CreateRoomPage}/>
        </Switch>
      </Router>
    )
  }
}