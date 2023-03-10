import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  //   Card,
  //   CardContent,
  //   Typography,
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
  type: "",
  user_id: "",
};

function AddTaskCard() {
  const [submittedValues, setSubmittedValues] = useState([]);
  const [user, setUser] = useState([]);
  const [task, setTask] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => response.data)
      .then((data) => {
        setUser(data);
        console.info(type);
        console.info(setType);
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
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <Field
              as={TextField}
              id="outlined-basic"
              labelid="Outlined"
              variant="outlined"
              name="name"
              label="Name"
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
            <Field
              as={TextField}
              id="outlined-basic"
              labelid="Outlined"
              variant="outlined"
              name="description"
              label="Description"
              value={values.description}
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
            <FormControl>
              {/* <InputLabel id="demo-simple-select-standard-label">
                Select Task Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                fullWidth
                variant="outlined"
                value={values.type}
                onChange={(e) => setType(e.target.value)}
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
              </Select> */}
              <FormHelperText>Please Select Task Type</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Select User</InputLabel>
              <Select
                label="Select user"
                fullWidth
                value={values.user_id}
                onChange={(e) => setUser(e.target.value)}
                sx={{
                  width: 250,
                }}
              >
                {user.map((users) => {
                  return (
                    <MenuItem
                      key={users.id}
                      value={`${users.firstname} ${users.lastname}`}
                    >
                      {`${users.firstname} ${users.lastname}`}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormHelperText>Please Select User</FormHelperText>
            <Button type="submit">Add task</Button>
          </Form>
        )}
      </Formik>
      {/* {submittedValues.map((values, index) => (
        <Card key={values.index} direction="row" justifyContent="center">
          <CardContent direction="row" justifyContent="spacebetween">
            <Typography gutterBottom variant="h5" component="h2">
              Name: {values.name}
            </Typography>

            <Typography gutterBottom variant="h5" component="h2">
              State: {values.state}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6" color="textSecondary" component="h6">
              Start date: {values.task_start_date}
            </Typography>

            <Typography variant="h6" color="textSecondary" component="h6">
              End date: {values.task_end_date}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Description: {values.description}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Progress: {values.progress}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Task Type: {values.type}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              User: {values.user_id}
            </Typography>
          </CardContent>
        </Card> */}
      {/* ))} */}
    </>
  );
}

export default AddTaskCard;
