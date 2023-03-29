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
  useTheme,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Paper,
  Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { tokens } from "../../theme";

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

function AddTaskForm({ projectName }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [user, setUser] = useState([]);
  const [task, setTask] = useState([]);
  const [submittedValues, setSubmittedValues] = useState([]);
  const [selectTaskId, setSelectTaskId] = useState();
  const token = localStorage.getItem("token");

  // Here for the dialogs adds ------------------------------------------//
  const [openAddTask, setOpenAddTask] = useState(false);
  const handleOpenAddTask = () => {
    setOpenAddTask(true);
  };
  const handleCloseAddTask = () => {
    setOpenAddTask(false);
  };

  // Here for the dialogs delete------------------------------------------//
  const [openDeleteTask, setOpenDeleteTask] = useState(false);
  const handleDeleteTaskOpen = (taskIdSelect) => {
    setSelectTaskId(taskIdSelect);
    setOpenDeleteTask(true);
  };
  const handleDeleteTaskClose = () => {
    setOpenDeleteTask(false);
  };

  // Here the axios requests ----------------------------------------------//
  // Request axios post tasks -------------------------------------------//
  const handleSubmitCard = (values) => {
    setSubmittedValues([...submittedValues, values]);
    console.info(submittedValues, "submitvalues");
  };
  const handleSubmit = async (values) => {
    try {
      const result = await axios.post("http://localhost:5000/tasks", values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelectTaskId(result.data);
      console.info("Task added successfully!", result);
      // eslint-disable-next-line no-param-reassign
      values = { ...values, id: result.data };
      handleSubmitCard(values);
    } catch (error) {
      console.error("Error adding Task.");
    }
  };
  // Request axios delete tasks -------------------------------------------//
  const handleDeleteTask = async (values) => {
    try {
      await axios.delete(
        `http://localhost:5000/tasks/${selectTaskId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        values
      );
      setSubmittedValues(
        submittedValues.filter((value) => {
          console.info(value, "valueMap", values.id, "valuesId");
          return value.id !== selectTaskId;
        })
      );
      console.info("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting Task.");
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
      .get("http://localhost:5000/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((data) => {
        setTask(data);
      });
  }, []);

  return (
    <>
      <Paper
        elevation="10"
        mb="30px"
        sx={{
          background: `linear-gradient(to left, ${colors.primary[700]}, ${colors.primary[400]})`,
          p: "1%",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            borderColor: "primary",
            borderRadius: "5px",
            backgroundColor: colors.grey[100],
            p: "8px",
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            sx={{ flexDirection: { xs: "column", md: "column" } }}
          >
            {({ values, handleChange, setFieldValue, resetForm }) => (
              <Form>
                <FormControl
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: { xs: "column", md: "row" },
                    marginBottom: "4%",
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
                    style={{
                      backgroundColor: colors.grey[400],
                      borderRadius: "5px",
                    }}
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
                    style={{
                      backgroundColor: colors.grey[400],
                      borderRadius: "5px",
                    }}
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
                    style={{
                      backgroundColor: colors.grey[400],
                      borderRadius: "5px",
                    }}
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
                    style={{
                      backgroundColor: colors.grey[400],
                      borderRadius: "5px",
                    }}
                  />
                </FormControl>

                <FormControl
                  sx={{
                    display: "flex",
                    direction: "row",
                    marginBottom: "4%",
                    marginTop: "4%",
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
                    style={{
                      backgroundColor: colors.grey[400],
                      borderRadius: "5px",
                    }}
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
                    style={{
                      backgroundColor: colors.grey[400],
                      borderRadius: "5px",
                    }}
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
                    style={{
                      backgroundColor: colors.grey[400],
                      borderRadius: "5px",
                    }}
                  />
                </FormControl>

                <FormControl
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-around",
                    alignItems: { xs: "center", md: "space-around" },
                    marginBottom: "1%",
                    marginTop: "4%",
                  }}
                >
                  <FormControl
                    sx={{ display: "flex", flexDirection: "column", m: "1" }}
                  >
                    <InputLabel
                      id="demo-simple-select-standard-label"
                      sx={{ color: colors.primary[500] }}
                    >
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
                        border: 1,
                      }}
                      style={{
                        backgroundColor: colors.grey[400],
                        borderColor: colors.primary[500],
                        borderRadius: "5px",
                      }}
                    >
                      {[...uniqueTaskTypes].map((type) => (
                        <MenuItem key={type.id} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText sx={{ color: colors.primary[500] }}>
                      Please Select Task Type
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    sx={{ display: "flex", flexDirection: "column", m: "1" }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ color: colors.primary[500] }}
                    >
                      Select User
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      fullWidth
                      variant="outlined"
                      value={values.user_id}
                      onChange={(e) => setFieldValue("user_id", e.target.value)}
                      label="Select User"
                      sx={{
                        width: 250,
                        border: 1,
                      }}
                      style={{
                        backgroundColor: colors.grey[400],
                        borderColor: colors.primary[500],
                        borderRadius: "5px",
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
                    <FormHelperText sx={{ color: colors.primary[500] }}>
                      Please Select User
                    </FormHelperText>
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
                        <DialogContentText
                          id="alert-dialog-add"
                          color="primary"
                        >
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
                </FormControl>
              </Form>
            )}
          </Formik>
        </Stack>
      </Paper>
      <Card
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="8px"
        paddingBottom="16px"
      >
        {submittedValues.map((values) => {
          const findUser = user.find(
            (userFind) => userFind.id === values.user_id
          );
          const userName = findUser
            ? `${findUser.firstname} ${findUser.lastname}`
            : "Unknown User";
          return (
            <Paper
              elevation="10"
              sx={{
                background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
                p: "1%",
                mt: "4%",
              }}
            >
              <Stack
                sx={{
                  justifyContent: "center",
                  flexDirection: "column",
                  borderColor: "primary",
                  borderRadius: "5px",
                  backgroundColor: colors.grey[100],
                  p: "1%",
                }}
              >
                <CardContent
                  flexDirection="column"
                  justifyContent="spacebetween"
                >
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      color="primary"
                      gutterBottom
                      variant="h4"
                      component="h3"
                    >
                      Name : {values.name}
                    </Typography>

                    <Typography
                      color="primary"
                      gutterBottom
                      variant="h4"
                      component="h3"
                    >
                      State : {values.state}
                    </Typography>
                  </CardContent>

                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "2%",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="h6"
                    >
                      Start date : {values.task_start_date}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="h6"
                    >
                      End date : {values.task_end_date}
                    </Typography>
                  </CardContent>

                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "2%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                    >
                      Description : {values.description}
                    </Typography>
                  </CardContent>
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "2%",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                    >
                      Progress : {values.progress}%
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                    >
                      Task Type : {values.type}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                    >
                      User : {userName}
                    </Typography>
                  </CardContent>

                  <CardContent>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handleDeleteTaskOpen(values.id);
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
                        <Button
                          onClick={handleDeleteTaskClose}
                          color="secondary"
                        >
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
                  </CardContent>
                </CardContent>
              </Stack>
            </Paper>
          );
        })}
      </Card>
    </>
  );
}

export default AddTaskForm;
