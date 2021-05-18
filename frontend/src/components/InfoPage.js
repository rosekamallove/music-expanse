import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const pages = {
  JOIN: "pages.join",
  CREATE: "pages.create",
};

export default function Info(Props) {
  const [page, setPage] = useState(pages.JOIN);

  const joinInfo = () => {
    return `Tired of arguing over music at a party or a gathering? Here, make a virtual room add people with the unique RoomID, and let the members of the room control the music through a voting system.`;
  };
  const createInfo = () => {
    return "Create an Expanse, LogIn to spotify, Share the code and add members!";
  };

  return (
    <Grid container spacing={1}>
      <Grid item cs={12} align="center">
        <Typography component="h4" variant="h4">
          What is Music Expanse?
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="body1" align="center">
          {page === pages.JOIN ? joinInfo() : createInfo()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <IconButton
          onClick={() => {
            page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
          }}
        >
          {page === pages.CREATE ? (
            <NavigateBeforeIcon />
          ) : (
            <NavigateNextIcon />
          )}
        </IconButton>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          startIcon={<ArrowBackIosIcon />}
          color="secondary"
          variant="contained"
          to="/"
          component={Link}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
