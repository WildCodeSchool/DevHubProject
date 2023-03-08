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
    height: "20em",
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
function Task({ task, onDelete }) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent sx={{ maxWidth: "30em" }}>
        <Typography variant="h5" component="h4">
          {task.name}
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          maxwidth="120"
          multiline
          maxRows={4}
        >
          {task.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Début : {task.startDate} - Fin : {task.endDate}- Utilisateur :
          {task.user}
        </Typography>
        <Typography variant="h6" component="h4">
          {task.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onDelete}>
          Supprimer
        </Button>
        <Button
          size="small"
          className={task.completed ? classes.completed : ""}
        >
          {task.completed ? "Terminé" : "En cours"}
        </Button>
      </CardActions>
    </Card>
  );
}
Task.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.string.isRequired,
};
export default Task;
