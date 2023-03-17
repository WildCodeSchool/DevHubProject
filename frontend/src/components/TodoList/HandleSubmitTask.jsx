import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  task_start_date: "",
  task_end_date: "",
  description: "",
  state: "",
  progress: "",
  type: [],
  user_id: [1],
};

function AddTaskForm({ projectName }) {
  const [submittedValues, setSubmittedValues] = useState([]);
  const [user, setUser] = useState([]);
  const [task, setTask] = useState([]);

  const handleSubmitCard = (values) => {
    setSubmittedValues([...submittedValues, values]);
  };

  const handleSubmit = async (values) => {
    try {
      await axios.post("http://localhost:5000/tasks", values);
      console.info("Task added successfully!");
      handleSubmitCard(values);
      console.info(values, "values");
    } catch (error) {
      console.info("Error adding Task.");
      console.error(error, "error");
    }
  };
  const handleUpdate = async (values) => {
    try {
      await axios.put("http://localhost:5000/tasks/:id", values);
      console.info("Task updated successfully!");
    } catch (error) {
      console.info("Error updating Task.");
    }
  };
  const handleDelete = async (values) => {
    try {
      await axios.delete("http://localhost:5000/tasks/:id", values);
      console.info("Task deleted successfully!");
    } catch (error) {
      console.info("Error deleting Task.");
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

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, setFieldValue }) => (
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
                label="Start Date"
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
                label="End Date"
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
                  onChange={setFieldValue}
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
                  onChange={setFieldValue}
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
                justifyContent: "space-around",
                marginBottom: "1%",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                Add Task
              </Button>

              <Button
                onClick={handleUpdate}
                variant="contained"
                color="greenAccent"
              >
                Update Task
              </Button>

              <Button
                onClick={handleDelete}
                variant="contained"
                color="secondary"
              >
                Delete Task
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
                <Typography gutterBottom variant="h5" component="h3">
                  Name : {values.name}
                </Typography>

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
          </Card>
        ))}
      </Card>
    </>
  );
}
export default AddTaskForm;
