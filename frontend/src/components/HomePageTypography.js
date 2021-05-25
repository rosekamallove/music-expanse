import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./Theme/normal";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 600,
    backgroundColor: "#00000",
    textAlign: "left",
  },
  bullet: {
    display: "inline-block",
    margin: "5px 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 2,
  },
  heading: {
    align: "center",
    padding: "5px",
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <MuiThemeProvider theme={theme}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h2" component="h2" align="center">
            Music Expanse
          </Typography>
          <Typography variant="h6">
            Tired of arguing over music in a party or a gathering?
          </Typography>
          <Typography variant="body2" component="p">
            Tired of arguing over music at a party or a gathering? Here, make a
            virtual room add people with the unique RoomID, and let the members
            of the room control the music through a voting system. <br />
            <Typography variant="body2" component="p">
              It works
              {bull}Like{bull}Magic{bull}
              Ok no, actually it uses the Spotify's Public API.
            </Typography>
            <Typography variant="h7" component="h7">
              So, log in and start partying, forget about all the work you have
              to get done and enjoy!
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            <a
              href="https://github.com/rosekamallove/musicRooms"
              target="_blank"
            >
              Code
            </a>
          </Button>
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
}
