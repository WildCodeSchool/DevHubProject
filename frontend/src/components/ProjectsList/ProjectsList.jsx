import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

function ProjectsList() {
  const classes = useStyles();

  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Consectetur adipiscing elit",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Sed do eiusmod tempor incididunt",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Ut labore et dolore magna aliqua",
    },
    {
      id: 5,
      name: "Project 5",
      description: "Ut enim ad minim veniam",
    },
  ];

  return (
    <div className={classes.root}>
      <h3>Projects List</h3>
      <List>
        {projects.map(({ id, name, description }) => (
          <ListItem key={id}>
            <ListItemText primary={name} secondary={description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ProjectsList;
