import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import trainBackground from "../../assets/train.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    backgroundImage: `url(${trainBackground})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "100% auto",
    },
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: "white",
    textShadow: "1px 1px 2px black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  subtitle: {
    fontWeight: 400,
    marginBottom: theme.spacing(2),
    color: "white",
    textShadow: "1px 1px 2px black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        404
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        Oops! The page you requested was not found.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/"
      >
        Go back to homepage
      </Button>
    </div>
  );
}

export default NotFound;
