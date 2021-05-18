import React, { Component } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Grid, Button, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import CreateRoomPage from "./CreateRoomPage";
import MusicPlayer from "./MusicPlayer";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false,
      showSettings: false,
      spotifyAuthenticated: false,
      song: {},
    };
    this.roomCode = this.props.match.params.roomCode;
    this.getRoomDetails();
  }

  componentDidMount = () => {
    this.interval = setInterval(this.getCurrentSong, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  getRoomDetails = async () => {
    const response = await fetch(`/api/get-room?code=${this.roomCode}`);
    if (!response.ok) {
      this.props.leaveRoomCallback();
      this.props.history.push("/");
    }
    const data = await response.json();
    this.setState({
      votesToSkip: data.votes_to_skip,
      guestCanPause: data.guest_can_pause,
      isHost: data.is_host,
    });
    if (this.state.isHost) {
      this.authenticateSpotify();
    }
  };

  authenticateSpotify = () => {
    fetch("/spotify/is-authenticated")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ spotifyAuthenticated: data.status });
        console.log(data.status);
        if (!data.status) {
          fetch("/spotify/get-auth-url")
            .then((response) => response.json())
            .then((data) => {
              window.location.replace(data.url);
            });
        }
      });
  };

  getCurrentSong = () => {
    fetch("/spotify/current-song")
      .then((response) => {
        if (!response.ok) {
          return {};
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({ song: data });
        //console.log(data);
      });
  };

  leaveButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/api/leave-room", requestOptions).then((_response) => {
      this.props.leaveRoomCallback();
      this.props.history.push("/");
    });
  };

  updateShowSettings = (value) => {
    this.setState({
      showSettings: value,
    });
  };

  renderSettings = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <CreateRoomPage
            update={true}
            votesToSkip={this.state.votesToSkip}
            guestCanPause={this.state.guestCanPause}
            roomCode={this.roomCode}
            updateCallback={this.getRoomDetails}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            startIcon={<CancelIcon />}
            variant="contained"
            color="secondary"
            onClick={() => this.updateShowSettings(false)}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    );
  };

  renderSettingsButton = () => {
    return (
      <Grid item xs={12} align="center">
        <Button
          startIcon={<SettingsApplicationsIcon />}
          variant="contained"
          color="primary"
          onClick={() => this.updateShowSettings(true)}
        >
          Settings
        </Button>
      </Grid>
    );
  };

  render() {
    if (this.state.showSettings) {
      return this.renderSettings();
    }
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Chip
            color="primary"
            avatar={
              <Avatar src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png" />
            }
            label={this.roomCode}
          />
        </Grid>
        <MusicPlayer {...this.state.song} />
        {this.state.isHost ? this.renderSettingsButton() : null}
        <Grid item xs={12} align="center">
          <Button
            startIcon={<ExitToAppIcon />}
            variant="contained"
            color="secondary"
            onClick={this.leaveButtonPressed}
          >
            Leave Expanse
          </Button>
        </Grid>
      </Grid>
    );
  }
}
