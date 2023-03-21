import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const initialValues = {
  name: "",
  task_start_date: "",
  task_end_date: "",
  description: "",
  state: "",
  progress: "",
  type: "",
  user_id: [],
};

function AddTaskRoadmap({ projectName }) {
  const [isEditable, setIsEditable] = useState(true);
  const [taskId, setTaskId] = useState();
  console.info(isEditable, "isEditable");
  const [task, setTask] = useState([]);

  const getTaskRoadmap = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => response.data)
      .then((data) => {
        const formattedData = data.map((item) => {
          const formattedStartDate = new Date(item.task_start_date)
            .toLocaleDateString("fr-FR")
            .slice(0, 10);
          const formattedEndDate = new Date(item.task_end_date)
            .toLocaleDateString("fr-FR")
            .slice(0, 10);
          return {
            ...item,
            task_start_date: formattedStartDate,
            task_end_date: formattedEndDate,
          };
        });
        setTask(formattedData);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getTaskRoadmap();
  }, []);

  // Here for the dialogs adds ------------------------------------------//
  const [openAddTask, setOpenAddTask] = useState(false);
  const handleOpenAddTask = () => {
    setOpenAddTask(true);
  };
  const handleCloseAddTask = () => {
    setOpenAddTask(false);
  };

  // Here for the dialogs update ------------------------------------------//
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const handleUpdateTaskOpen = () => {
    setOpenUpdateTask(true);
  };
  const handleUpdateTaskClose = () => {
    setOpenUpdateTask(false);
  };

  // Here for the dialogs delete------------------------------------------//
  const [openDeleteTask, setOpenDeleteTask] = useState(false);
  const handleDeleteTaskOpen = () => {
    setOpenDeleteTask(true);
  };
  const handleDeleteTaskClose = () => {
    setOpenDeleteTask(false);
  };

  // Here the axios requests ----------------------------------------------//
  // Request axios post tasks -------------------------------------------//
  const [submittedValues, setSubmittedValues] = useState([]);
  const [user, setUser] = useState([]);

  const handleSubmitCard = (values) => {
    setSubmittedValues([...submittedValues, values]);
  };

  const handleSubmit = async (values) => {
    setIsEditable(false);
    try {
      const result = await axios.post("http://localhost:5000/tasks", values);
      setTaskId(result.data);
      console.info("Task added successfully!", result);
      handleSubmitCard(values);
    } catch (error) {
      console.info("Error adding Task.");
      console.error(error);
    }
  };

  // Request axios put tasks -------------------------------------------//
  const handleUpdateTask = async (values) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${taskId}`, values);
      console.info("Task updated successfully!");
    } catch (error) {
      console.info("Error updating Task.");
    }
  };

  // Request axios delete tasks -------------------------------------------//
  const handleDeleteTask = async (values) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`, values);
      console.info("Task deleted successfully!");
    } catch (error) {
      console.info("Error deleting Task.");
    }
  };
  // Unique task types to show all different types in select only once --------------------//
  const uniqueTaskTypes = new Set();
  task.forEach((tasks) => uniqueTaskTypes.add(tasks.type));

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

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, setFieldValue, resetForm }) => (
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
              id="outlined-secondary"
              labelid="Outlined-secondary"
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
                value={values.type}
                onChange={(e) => setFieldValue("type", e.target.value)}
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
              <InputLabel id="demo-simple-select-label">Select User</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                fullWidth
                variant="outlined"
                value={values.user_id}
                onChange={(e) => setFieldValue("user_id", e.target.value)}
                label="Select User"
                sx={{
                  width: 250,
                }}
              >
                {user.map((users) => {
                  return (
                    <MenuItem key={users.id} value={users.id}>
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
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenAddTask()}
              >
                Add Task
              </Button>
              <Dialog
                open={openAddTask}
                onClose={handleCloseAddTask}
                aria-labelledby="alert-task-add"
                aria-describedby="alert-task-add"
                color="#0f206e"
              >
                <DialogTitle
                  id="alert-task-add"
                  sx={{ backgroundColor: "#0f206e" }}
                >
                  Here the last step to add your task !
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: "#FFFFFF" }}>
                  <DialogContentText id="alert-dialog-add" color="primary">
                    Do you really want to add your new task now ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: "#FFFFFF" }}>
                  <Button onClick={handleCloseAddTask} color="secondary">
                    Disagree
                  </Button>
                  <Button
                    onClick={() => {
                      handleSubmit(values);
                      handleCloseAddTask();
                      resetForm();
                    }}
                    color="primary"
                  >
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div>
              <Button
                variant="contained"
                color="greenAccent"
                onClick={() => setIsEditable(true)}
              >
                Update
              </Button>
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setIsEditable(false);
                  handleUpdateTaskOpen();
                }}
              >
                Save Update
              </Button>
              <Dialog
                open={openUpdateTask}
                onClose={handleUpdateTaskClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                color="#0f206e"
              >
                <DialogTitle
                  id="alert-dialog-update"
                  sx={{ backgroundColor: "#0f206e" }}
                >
                  Save update ?
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: "#FFFFFF" }}>
                  <DialogContentText
                    id="alert-dialog-description"
                    color="primary"
                  >
                    Do you really want to save your update to your task now ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: "#FFFFFF" }}>
                  <Button onClick={handleUpdateTaskClose} color="secondary">
                    Disagree
                  </Button>
                  <Button
                    onClick={() => {
                      handleUpdateTask(values);
                      handleUpdateTaskClose();
                    }}
                    color="primary"
                  >
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  handleDeleteTaskOpen();
                }}
              >
                Delete Task
              </Button>
              <Dialog
                open={openDeleteTask}
                onClose={handleDeleteTaskClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                color="#0f206e"
              >
                <DialogTitle
                  id="alert-dialog-delete-task"
                  sx={{ backgroundColor: "#0f206e" }}
                >
                  Delete this task ?
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: "#FFFFFF" }}>
                  <DialogContentText
                    id="alert-dialog-description"
                    color="primary"
                  >
                    Do you really want to delete this task now ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: "#FFFFFF" }}>
                  <Button onClick={handleDeleteTaskClose} color="secondary">
                    Disagree
                  </Button>
                  <Button
                    onClick={() => {
                      handleDeleteTask(values);
                      handleDeleteTaskClose();
                    }}
                    color="primary"
                  >
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
}

export default AddTaskRoadmap;
