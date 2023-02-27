import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const sendMessage = {
  firstName: "Jean",
  lastName: "Dupont",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function capitalizeName(name) {
  const nameParts = name.split(" ");
  const capitalizedParts = nameParts.map((part) => capitalizeFirstLetter(part));
  return capitalizedParts.join(" ");
}

function SendMessage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" endIcon={<SendIcon />}>
        Send Message to "{capitalizeName(sendMessage.firstName)}{" "}
        {capitalizeName(sendMessage.lastName)}"
      </Button>
    </div>
  );
}

export default SendMessage;
