import React from "react";
import { red } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Normal or default theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main : '#1ed760',
    },
    secondary: {
      main: '#191414'
    },
    default: {
      main: '#f5f5f5'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
    titleBar: {
      main: '#eeeeee',
      contrastText: '#222222',
    },
  },
})



export default theme;