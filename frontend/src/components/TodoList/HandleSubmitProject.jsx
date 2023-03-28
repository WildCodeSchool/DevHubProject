import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { FormControl, useTheme, Stack, Paper } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { tokens } from "../../theme";

const initialValues = {
  name: "",
  state: "",
  description: "",
  project_start_date: "",
  project_end_date: "",
  progress: "",
  project_manager: "",
};

function AddProjectForm({ setProjectName }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isEditable, setIsEditable] = useState(true);
  const [projectId, setProjectId] = useState();
  const token = localStorage.getItem("token");

  const handleSubmit = async (values) => {
    setIsEditable(false);
    try {
      const result = await axios.post(
        "http://localhost:5000/projects",
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProjectName(values.name);
      setProjectId(result.data);
      console.info("Project added successfully!", result);
    } catch (error) {
      console.info("Error adding project.");
    }
  };
  const handleDelete = async (values) => {
    try {
      await axios.delete(
        `http://localhost:5000/projects/${projectId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        values
      );
      console.info("Project deleted successfully!");
    } catch (error) {
      console.info("Error deleting project.");
    }
  };
  const handleUpdate = async (values) => {
    try {
      await axios.put(`http://localhost:5000/projects/${projectId}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.info("Project updated successfully!");
    } catch (error) {
      console.info("Error updating project.");
    }
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialOpen = () => {
    setDialogOpen(true);
  };
  const handleDialClose = () => {
    setDialogOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openDelete, setOpenDelete] = useState(false);
  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  return (
    <Paper
      elevation="10"
      mb="30px"
      sx={{
        background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form>
              <FormControl
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: { xs: "column", md: "row" },
                  marginBottom: "4%",
                }}
              >
                <Field
                  as={TextField}
                  id="outlined-basic"
                  labelid="Outlined"
                  variant="outlined"
                  name="name"
                  label="Project Name"
                  value={values.name}
                  onChange={handleChange}
                  disabled={!isEditable}
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
                  disabled={!isEditable}
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
                  disabled={!isEditable}
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
                  name="project_manager"
                  label="Project Manager"
                  value={values.project_manager}
                  onChange={handleChange}
                  disabled={!isEditable}
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
                  width: "100%",
                  marginBottom: "4%",
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
                  disabled={!isEditable}
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
                  marginBottom: "3%",
                }}
              >
                <Field
                  as={TextField}
                  id="outlined-basic"
                  labelid="Outlined"
                  variant="outlined"
                  name="project_start_date"
                  label="Start Date"
                  type="date"
                  value={values.project_start_date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  disabled={!isEditable}
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
                  name="project_end_date"
                  label="End Date"
                  type="date"
                  value={values.project_end_date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  disabled={!isEditable}
                  style={{
                    backgroundColor: colors.grey[400],
                    borderRadius: "5px",
                  }}
                />
              </FormControl>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                  justifyContent: "space-around",
                  alignItems: { xs: "center", sm: "center", md: "center" },
                  marginBottom: "1%",
                }}
              >
                <FormControl sx={{ pb: "2%" }}>
                  <Button
                    variant="contained"
                    onClick={() => handleDialOpen()}
                    style={{ backgroundColor: colors.safran[500] }}
                  >
                    Add Project
                  </Button>
                  <Dialog
                    open={dialogOpen}
                    onClose={handleDialClose}
                    aria-labelledby="alert-dialog-add"
                    aria-describedby="alert-dialog-add"
                  >
                    <DialogTitle
                      id="alert-dialog-add"
                      sx={{ backgroundColor: "#0f206e" }}
                    >
                      Here the last step to add your project !
                    </DialogTitle>
                    <DialogContent sx={{ backgroundColor: "#FFFFFF" }}>
                      <DialogContentText id="alert-dialog-add" color="primary">
                        Do you really want to add your new project now ?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: "#FFFFFF" }}>
                      <Button onClick={handleDialClose} color="secondary">
                        Disagree
                      </Button>
                      <Button
                        onClick={() => {
                          handleSubmit(values);
                          handleDialClose();
                        }}
                        color="primary"
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </FormControl>
                <FormControl sx={{ pb: "2%" }}>
                  <Button
                    variant="contained"
                    color="greenAccent"
                    onClick={() => setIsEditable(true)}
                  >
                    Update
                  </Button>
                </FormControl>
                <FormControl sx={{ pb: "2%" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setIsEditable(false);
                      handleClickOpen();
                    }}
                  >
                    Save Update
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
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
                        Do you really want to save your update to your project
                        now ?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: "#FFFFFF" }}>
                      <Button onClick={handleClose} color="secondary">
                        Disagree
                      </Button>
                      <Button
                        onClick={() => {
                          handleUpdate(values);
                          handleClose();
                        }}
                        color="primary"
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </FormControl>

                <FormControl sx={{ pb: "2%" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      handleDeleteOpen();
                    }}
                  >
                    Delete Project
                  </Button>
                  <Dialog
                    open={openDelete}
                    onClose={handleDeleteClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    color="#0f206e"
                  >
                    <DialogTitle
                      id="alert-dialog-update"
                      sx={{ backgroundColor: "#0f206e" }}
                    >
                      Delete your Project ?
                    </DialogTitle>
                    <DialogContent sx={{ backgroundColor: "#FFFFFF" }}>
                      <DialogContentText
                        id="alert-dialog-description"
                        color="primary"
                      >
                        Do you really want to delete your project now ?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: "#FFFFFF" }}>
                      <Button onClick={handleDeleteClose} color="secondary">
                        Disagree
                      </Button>
                      <Button
                        onClick={() => {
                          handleDelete(values);
                          handleDeleteClose();
                        }}
                        color="primary"
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </FormControl>
              </FormControl>
            </Form>
          )}
        </Formik>
      </Stack>
    </Paper>
  );
}
export default AddProjectForm;
