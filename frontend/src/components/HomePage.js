import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Info from "./InfoPage";
import HomePageTypography from "./HomePageTypography";
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
          <HomePageTypography />
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup variant="contained" color="primary">
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

  roomExistandUserAllowed = () => {
    if (
      this.state.roomCode &&
      confirm(
        "A room you created already exist! Do you wanna be redirected to it?"
      )
    ) {
      return true;
    } else {
      return false;
    }
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
                  return this.roomExistandUserAllowed() ? (
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
