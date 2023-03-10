// import React from "react";
// import { Formik, Form, Field } from "formik";
// import { TextField, Button } from "@material-ui/core";
// import axios from "axios";

// const initialValues = {
//   name: "",
//   state: "",
//   description: "",
//   project_start_date: "",
//   project_end_date: "",
//   progress: "",
//   project_manager: "",
// };
// function AddProjectForm() {
//   const handleSubmit = async (values) => {
//     try {
//       await axios.post("http://localhost:5000/projects", values);
//       alert("Project added successfully!");
//     } catch (error) {
//       console.log(error);
//       alert("Error adding project.");
//     }
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       {({ values, handleChange }) => (
//         <Form>
//           <Field
//             as={TextField}
//             name="name"
//             label="Name"
//             value={values.name}
//             onChange={handleChange}
//           />
//           <Field
//             as={TextField}
//             name="state"
//             label="State"
//             value={values.state}
//             onChange={handleChange}
//           />
//           <Field
//             as={TextField}
//             name="description"
//             label="Description"
//             value={values.description}
//             onChange={handleChange}
//           />
//           <Field
//             as={TextField}
//             name="project_start_date"
//             label="Start Date"
//             type="date"
//             value={values.project_start_date}
//             onChange={handleChange}
//             InputLabelProps={{ shrink: true }}
//           />
//           <Field
//             as={TextField}
//             name="project_end_date"
//             label="End Date"
//             type="date"
//             value={values.project_end_date}
//             onChange={handleChange}
//             InputLabelProps={{ shrink: true }}
//           />
//           <Field
//             as={TextField}
//             name="progress"
//             label="Progress"
//             type="number"
//             value={values.progress}
//             onChange={handleChange}
//           />
//           <Field
//             as={TextField}
//             name="project_manager"
//             label="Manager"
//             value={values.project_manager}
//             onChange={handleChange}
//           />
//           <Button type="submit">Add Project</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
// export default AddProjectForm;
