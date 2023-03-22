import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { FormControl } from "@mui/material";

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
  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/projects", values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjectName(values.name);
      console.info("Project added successfully!");
    } catch (error) {
      console.info("Error adding project.");
      console.info(error);
    }
  };
  const handleDelete = async (values) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:5000/projects/20", values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.info("Project deleted successfully!");
    } catch (error) {
      console.info("Error deleting project.");
    }
  };
  const handleUpdate = async (values) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/projects/11", values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.info("Project updated successfully!");
    } catch (error) {
      console.info("Error updating project.");
      console.error(error, "error");
    }
  };

  return (
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
              name="name"
              label="Project Name"
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
            <Field
              as={TextField}
              id="outlined-basic"
              labelid="Outlined"
              variant="outlined"
              name="project_manager"
              label="Project Manager"
              value={values.project_manager}
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
              name="project_start_date"
              label="Start Date"
              type="date"
              value={values.project_start_date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
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
            <Button type="submit" variant="contained" color="primary">
              Add Project
            </Button>

            <Button onClick={handleUpdate} variant="contained" color="safran">
              Update Project
            </Button>

            <Button
              onClick={handleDelete}
              variant="contained"
              color="secondary"
            >
              Delete Project
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
}
export default AddProjectForm;
