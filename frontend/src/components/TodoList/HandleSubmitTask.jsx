// import { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import {
//   TextField,
//   Button,
// //   Select,
//   Card,
//   CardContent,
//   Typography,
// } from "@material-ui/core";

// // const AddTaskForm = () => {
// //     const handleSubmit = async (values) => {
// //       try {
// //         await axios.post("http://localhost:5000/tasks", values);
// //         alert("Project added successfully!");
// //       } catch (error) {
// //         console.log(error);
// //         alert("Error adding project.");
// //       }
// //     };
// const initialValues = {
//   name: "",
//   state: "",
//   task_start_date: "",
//   task_end_date: "",
//   description: "",
//   progress: "",
//   type: "",
//   user_id: "",
// };

// function AddTaskForm() {
//   const [submittedValues, setSubmittedValues] = useState(null);

//   const handleSubmit = (values) => {
//     setSubmittedValues(values);
//   };

//   return (
//     <>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         {({ values, handleChange }) => (
//           <Form>
//             <Field
//               as={TextField}
//               name="name"
//               label="Name"
//               value={values.name}
//               onChange={handleChange}
//             />
//             <Field
//               as={TextField}
//               name="state"
//               label="State"
//               value={values.state}
//               onChange={handleChange}
//             />
//             <Field
//               as={TextField}
//               name="task_start_date"
//               label="Task Start Date"
//               type="date"
//               value={values.task_start_date}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//             />
//             <Field
//               as={TextField}
//               name="task_end_date"
//               label="Task End Date"
//               type="date"
//               value={values.task_end_date}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//             />
//             <Field
//               as={TextField}
//               name="description"
//               label="Description"
//               value={values.description}
//               onChange={handleChange}
//             />
//             <Field
//               as={TextField}
//               name="progress"
//               label="Progress"
//               type="number"
//               value={values.progress}
//               onChange={handleChange}
//             />
//             <Field
//               as={TextField}
//               name="type"
//               label="Task Type"
//               value={values.type}
//               onChange={handleChange}
//             />
//             <Field
//               as={TextField}
//               name="user_id"
//               label="user_id"
//               value={values.user_id}
//               onChange={handleChange}
//             />
//             <Button type="submit">Add task</Button>
//           </Form>
//         )}
//       </Formik>

//       <Card>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Name: {submittedValues.name}
//           </Typography>

//           <Typography gutterBottom variant="h5" component="h2">
//             State: {submittedValues.state}
//           </Typography>

//           <Typography variant="body2" color="textSecondary" component="p">
//             Start date: {submittedValues.task_start_date}
//           </Typography>

//           <Typography variant="body2" color="textSecondary" component="p">
//             End date: {submittedValues.task_end_date}
//           </Typography>

//           <Typography variant="body2" color="textSecondary" component="p">
//             Description: {submittedValues.description}
//           </Typography>

//           <Typography variant="body2" color="textSecondary" component="p">
//             Progress: {submittedValues.progress}
//           </Typography>

//           <Typography variant="body2" color="textSecondary" component="p">
//             Task Type: {submittedValues.type}
//           </Typography>

//           <Typography variant="body2" color="textSecondary" component="p">
//             User: {submittedValues.user_id}
//           </Typography>
//         </CardContent>
//       </Card>
//     </>
//   );
// }

// export default AddTaskForm;
