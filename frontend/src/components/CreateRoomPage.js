import React, { Component } from "react";
import { render } from 'react-dom';
import { MuiThemeProvider, Grid, Button, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel} from '@material-ui/core'
import { Link } from "react-router-dom";
import theme from './Theme/normal';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StickyFooter from './TopBarAndFooter/Footer.js'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UpdateIcon from '@material-ui/icons/Update';
import Footer from "./TopBarAndFooter/Footer";



export default class CreateRoomPage extends Component {

  static defaultProps = {
    votesToSkip: 2,
    guestCanPause:  true,
    update: false,
    roomCode: null,
    updateCallback: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: this.props.guestCanPause,
      votesToSkip: this.votesToSkip,
    };

    this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
  }

  handleVotesChange(e) {
    this.setState({
      votesToSkip: e.target.value,
    });
  }

  handleGuestCanPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === "true" ? true : false,
    });
  }

  handleRoomButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause,
      }),
    };
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/room/" + data.code));
  }

  handleUpdateButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause,
      }),
    };
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/room/" + data.code));
  }  

  renderCreateButtons () {
    return (
      <Grid container spacing={1}>
         <Grid item xs={12} align="center">
            <Button 
	            startIcon={<AddCircleIcon/>}
              onClick={this.handleRoomButtonPressed}
              color="primary" 
              variant="contained">
                Create 
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button 
	          startIcon={<ArrowBackIosIcon/>}
            color="secondary" 
            variant="contained" to="/" 
            component={Link}>
            Back
            </Button>
          </Grid>
      </Grid>
    );
  }


  renderUpdateButtons () {
    return (
      <Grid item xs={12} align="center">
            <Button 
	            startIcon={<UpdateIcon/>}
              onClick={this.handleRoomButtonPressed}
              color="primary" 
              variant="contained">
                Update Room 
            </Button>
          </Grid>
    );
  }

  render() {
    const title = this.props.update ? "Update Room" : "Create a Room";
    return (
          <Grid container spacing={1}>
            <Grid item xs={12} align="center">     
              <Typography component='h4' variant="h4">
                {title} 
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <FormControl component="fieldset">
                <FormHelperText>
                  <div align='center'>
                    Guest Control of Playback State
                  </div>
                    <RadioGroup row defaultValue='true' onChange={this.handleGuestCanPauseChange}>
                      <FormControlLabel
                        value="true" 
                        control={<Radio color="primary"/>}
                        label="Play/Pause"
                        labelPlacement="bottom"
                      />
                      <FormControlLabel
                       value="false" 
                       control={<Radio color="secondary"/>}
                       label="No Control"
                       labelPlacement="bottom"
                      />
                    </RadioGroup>
                </FormHelperText>
              </FormControl>
           </Grid>
           <Grid item xs={12} align="center">
            <FormControl>
              <TextField 
              required={true} 
              onChange={this.handleVotesChange}
              type="number" 
              color="primary"
              defaultValue={this.state.votesToSkip}
              inputProps={{
                min: 1,
                style: {textAlign: "center"},
               }}
              />
              <FormHelperText>
                <div align="center">
                  Votes Required To Skip Song
                </div>
              </FormHelperText>
           </FormControl>
          </Grid>
               {this.props.update ? this.renderUpdateButtons() : this.renderCreateButtons()}
          </Grid>
    );
  }
}
