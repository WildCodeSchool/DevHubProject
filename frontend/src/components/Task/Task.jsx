import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexwrap: "nowrap",
    flexdirection: "row",
    aligncontent: "center",
    justifycontent: "space-around",
    width: "50%",
    height: "12em",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  completed: {
    textDecoration: "line-through",
  },
}));
function Task({ name, startDate, endDate, user, onDelete, completed }) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Début : {startDate} - Fin : {endDate} - Utilisateur : {user}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onDelete}>
          Supprimer
        </Button>
        <Button size="small" className={completed ? classes.completed : ""}>
          {completed ? "Terminé" : "En cours"}
        </Button>
      </CardActions>
    </Card>
  );
}
Task.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.string.isRequired,
};
export default Task;
