import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  // FormControl,
  // InputLabel,
  // Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import axios from "axios";
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
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskType, setTaskType] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => response.data)
      .then((data) => {
        setUser(data);
      });
  }, []);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        name: taskName,
        description: taskDescription,
        startDate,
        endDate,
        type: taskType,
        user,
        completed: false,
      },
    ]);
    setTaskName("");
    setTaskDescription("");
    setStartDate("");
    setEndDate("");
    setTaskType("");
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
          <Grid item xs={12} sm={3}>
            <TextField
              id="taskName"
              label="Task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="taskDescription"
              label="Describe your Task"
              value={taskDescription}
              inputProps={{ maxLength: 100 }}
              onChange={(e) => setTaskDescription(e.target.value)}
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
          <Grid item xs={12} sm={3}>
            <TextField
              id="taskType"
              label="Enter Task Type"
              value={taskType}
              InputProps={{
                sx: {
                  "& input": {
                    id: "outlined-multiline-flexible",
                    textAlign: "center",
                    height: "8em",
                    margin: "0.5em",
                  },
                },
              }}
              maxRows={5}
              onChange={(e) => setTaskType(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Select user"
              select
              id="user"
              value={user}
              fullWidth
              SelectProps={{ multiple: true }}
            >
              {user.map((users) => {
                return (
                  <MenuItem value={`${users.firstname} ${users.lastname}`}>
                    {`${users.firstname} ${users.lastname}`}
                  </MenuItem>
                );
              })}
              ;
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              backgroundColor="yellow"
              className={classes.button}
              onClick={handleAddTask}
              disabled={
                !taskName ||
                !taskDescription ||
                !startDate ||
                !endDate ||
                !taskType ||
                !user
              }
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
