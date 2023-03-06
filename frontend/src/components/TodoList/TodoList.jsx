import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import Task from "../Task/Task";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white",
    flexdirection: "row",
    justifycontent: "space-around",
    flexwrap: "nowrap",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "yellow",
  },
}));
function ToDoList() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [user, setUser] = useState("");

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        name: taskName,
        startDate,
        endDate,
        user,
        completed: false,
      },
    ]);
    setTaskName("");
    setStartDate("");
    setEndDate("");
    setUser("");
  };
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <>
      <Stack className={classes.root}>
        <Grid
          container
          m={4}
          spacing={2}
          backgroundcolor="grey"
          alignItems="center"
          wrap="nowrap"
          justifycontent="space-between"
        >
          <Grid item xs={12} sm={6}>
            <TextField
              id="taskName"
              label="Nom de la tâche"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="startDate"
              label="Date de début"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="endDate"
              label="Date de fin"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="user-label">Utilisateur</InputLabel>
              <Select
                labelId="user-label"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              >
                <MenuItem value="Alice">Alice</MenuItem>
                <MenuItem value="Bob">Bob</MenuItem>
                <MenuItem value="Charlie">Charlie</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              backgroundColor="yellow"
              className={classes.button}
              onClick={handleAddTask}
              disabled={!taskName || !startDate || !endDate || !user}
            >
              Ajouter
            </Button>
          </Grid>
        </Grid>
      </Stack>
      <Stack
        m={1}
        direction="row"
        justifyContent="space-around"
        sx={{ flexWrap: "wrap" }}
      >
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </Stack>
    </>
  );
}
export default ToDoList;
