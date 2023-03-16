import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import axios from "axios";

import { useState, useEffect } from "react";

const initialValues = {
  name: "",
  state: "",
  task_start_date: "",
  task_end_date: "",
  description: "",
  progress: "",
  type: [],
  user_id: [1],
};

function AddTaskCard({ projectName }) {
  const [submittedValues, setSubmittedValues] = useState([]);
  const [user, setUser] = useState([]);
  const [task, setTask] = useState([]);
  // const [selectedUserId, setSelectedUserId] = useState();

  const handleSubmitTask = async (values) => {
    try {
      await axios.post("http://localhost:5000/tasks", values);
      console.info("Task added successfully!");
    } catch (error) {
      console.error("Error adding task.");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => response.data)
      .then((data) => {
        setUser(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => response.data)
      .then((data) => {
        setTask(data);
      });
  }, []);

  const uniqueTaskTypes = new Set();
  task.forEach((tasks) => uniqueTaskTypes.add(tasks.type));

  const handleSubmit = (values) => {
    setSubmittedValues([...submittedValues, values]);
    console.info(values, "values");
  };
  console.info(task, "task");
  // const handleClick = (userId) => {
  //   // console.log(userId, "id");
  //   // setSelectedUserId(userId.id);
  // };
  // // console.log(selectedUserId, "userId global");

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <FormControl
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: "1%",
              }}
            >
              <Field
                as={TextField}
                id="outlined-basic"
                labelid="Outlined"
                variant="outlined"
                disabled
                defaultValue="Project Name"
                name="name"
                label="Project Name"
                value={projectName || ""}
                onChange={handleChange}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                labelid="Outlined"
                variant="outlined"
                name="name"
                label="Task Name"
                value={values.name}
                onChange={handleChange}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                labelid="Outlined"
                variant="outlined"
                name="state"
                label="State"
                value={values.state}
                onChange={handleChange}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                labelid="Outlined"
                variant="outlined"
                name="progress"
                label="Progress"
                type="number"
                value={values.progress}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl
              sx={{
                display: "flex",
                direction: "row",
                width: "100%",
                marginBottom: "2%",
              }}
            >
              <Field
                as={TextField}
                id="outlined-multiline-flexible"
                labelid="Multiline"
                multiline
                maxRows={4}
                name="description"
                label="Description"
                value={values.description}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "1%",
              }}
            >
              <Field
                as={TextField}
                id="outlined-basic"
                labelid="Outlined"
                variant="outlined"
                name="task_start_date"
                label="Task Start Date"
                type="date"
                value={values.task_start_date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                labelid="Outlined"
                variant="outlined"
                name="task_end_date"
                label="Task End Date"
                type="date"
                value={values.task_end_date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>

            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "1%",
              }}
            >
              <FormControl
                sx={{ display: "flex", flexDirection: "column", m: "1" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Select Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  fullWidth
                  variant="outlined"
                  value={task.type}
                  onChange={handleChange}
                  label="Select Type"
                  sx={{
                    width: 250,
                  }}
                >
                  {[...uniqueTaskTypes].map((type) => (
                    <MenuItem key={type.id} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Please Select Task Type</FormHelperText>
              </FormControl>

              <FormControl
                sx={{ display: "flex", flexDirection: "column", m: "1" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Select User
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  fullWidth
                  variant="outlined"
                  value={task.user_id}
                  onChange={handleChange}
                  label="Select Type"
                  sx={{
                    width: 250,
                  }}
                >
                  {user.map((users) => {
                    return (
                      <MenuItem
                        key={users.id}
                        value={`${users.firstname} ${users.lastname}`}
                        // onClick={() => handleClick(users)}
                      >
                        {`${users.firstname} ${users.lastname}`}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>Please Select User</FormHelperText>
              </FormControl>
            </FormControl>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                Add task
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>

      <Card>
        {submittedValues.map((values) => (
          <Card direction="row" justifyContent="center">
            <CardContent direction="row" justifyContent="spacebetween">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField gutterBottom variant="h5" component="h3">
                  Name : {values.name}
                </TextField>

                <Typography gutterBottom variant="h5" component="h3">
                  State : {values.state}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "2%",
                }}
              >
                <Typography variant="h6" color="textSecondary" component="h6">
                  Start date : {values.task_start_date}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="h6">
                  End date : {values.task_end_date}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "2%",
                }}
              >
                <Typography variant="body2" color="textSecondary" component="p">
                  Description : {values.description}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "2%",
                }}
              >
                <Typography variant="body2" color="textSecondary" component="p">
                  Progress : {values.progress}%
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Task Type : {values.type}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  User : {values.user_id}
                </Typography>
              </div>
            </CardContent>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                onSubmit={handleSubmitTask}
                type="submit"
                size="small"
                variant="contained"
                color="primary"
              >
                Complete
              </Button>
              <Button type="submit" variant="contained" color="greenAccent">
                Update
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </Card>
    </>
  );
}

export default AddTaskCard;
