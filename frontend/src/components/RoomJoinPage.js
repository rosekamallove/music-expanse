import React, { Component } from "react";
import { TextField, Button, Grid, Typography, MuiThemeProvider } from '@material-ui/core';
import { Link } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import theme from './Theme/normal';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CodeIcon from '@material-ui/icons/Code';

export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      roomCode:"",
      error: ""
    }
  }

  render() {
    return(
    <MuiThemeProvider theme={theme}>
      <Grid container space={1}> 
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Join a Room
          </Typography>
        </Grid> 
        <Grid item xs={12} align="center">
          <TextField 
            error={this.state.error}
            label="Code"
            placeholder="Enter a Room Code"  
            value={this.state.roomCode}
            helperText={this.state.error}
            variant="outlined"
            InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                <CodeIcon/>
              </InputAdornment>
              ),
            }} 
            />
        </Grid>
        
        <Grid item xs={12} align="center">
          <Button 
          variant="contained" 
          color="primary" 
          // onClick
	        startIcon={<CheckIcon/>}
          >
           Join 
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button 
          variant="contained" 
          color="secondary" 
          to="/" 
          component={Link}
	        startIcon={<ArrowBackIosIcon/>}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </MuiThemeProvider>
    );
  }
}