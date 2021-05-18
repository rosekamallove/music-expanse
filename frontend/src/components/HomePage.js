import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
  Grid,
  Button,
  ButtonGroup,
  Typography,
  MuiThemeProvider,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InfoIcon from "@material-ui/icons/Info";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import theme from "./Theme/normal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Info from "./InfoPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  componentDidMount = () => {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          roomCode: data.code,
        });
      });
  };

  renderHomePage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Music Expanse
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button
              color="primary"
              to="/join"
              component={Link}
              startIcon={<PersonAddIcon />}
            >
              Join a Expanse
            </Button>
            <Button
              color="default"
              to="/info"
              component={Link}
              startIcon={<InfoIcon />}
            >
              Info
            </Button>
            <Button
              color="secondary"
              to="/create"
              component={Link}
              startIcon={<AddCircleIcon />}
            >
              Create a Expanse
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };

  clearRoomCode = () => {
    this.setState({
      roomCode: null,
    });
  };

  render() {
    return (
      <div className="center">
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return this.state.roomCode ? (
                    <Redirect to={`/room/${this.state.roomCode}`} />
                  ) : (
                    this.renderHomePage()
                  );
                }}
              />
              <Route path="/join" component={RoomJoinPage} />
              <Route path="/info" component={Info} />
              <Route path="/create" component={CreateRoomPage} />
              <Route
                path="/room/:roomCode"
                render={(props) => {
                  return (
                    <Room {...props} leaveRoomCallback={this.clearRoomCode} />
                  );
                }}
              />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}
