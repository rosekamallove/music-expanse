import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from './Room';
import { Grid, Button, ButtonGroup, Typography} from '@material-ui/core';
import theme from './Theme/normal';
import {MuiThemeProvider} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.setState={
      roomCode: null,
    };
  }

  async componentDidMount(){
    fetch('/api/user-in-room')
    .then((response) => response.json())
    .then((data) => {
      this.State({
        roomCode: data.code
      });
    });
  }

  renderHomePage() {
    return(
      <div className="center">
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" compact="h3">
                Music Rooms
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <ButtonGroup disableElevation variant="contained" color="primary">
                <Button color="primary" to='/join' component={Link} startIcon={<GroupAddIcon/>}>
                  Join a Room
                </Button>
                <Button color="secondary" to='/create' component={Link} startIcon={<AddCircleIcon/>}>
                  Create a Room
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>

    );
  }


  render() {
    return ( 
      //react routers:
      //instead of returning the html we are going to return a router which will redirect us to the correct page
      <Router>
        <Switch>
          <Route exact path='/' render={
            () => {
              return (this.state.roomCode ? (<Redirect to={`/room/${this.state.roomCode}`}/>) : (this.renderHomePage()))
            }
          }>
            {this.renderHomePage()}
          </Route>
          <Route path='/join' component={RoomJoinPage}/>
          <Route path='/create' component={CreateRoomPage}/>
          <Route path='/room/:roomCode' component={Room}/>
        </Switch>
      </Router>
    )
  }
}