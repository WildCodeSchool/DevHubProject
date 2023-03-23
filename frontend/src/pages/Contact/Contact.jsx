/* eslint-disable no-alert */

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      /* eslint-disable no-bitwise */
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="Contact">
      <Grid container>logo + texte</Grid>
      <Grid container>
        <Typography gutterBottom variant="h3" align="center" />
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contact Us
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Fill up the form and our team will get back to you within 24
                hours.
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="firstName"
                      name="firstName"
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      id="lastName"
                      name="lastName"
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="phone"
                      name="phone"
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      required
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      required
                      error={
                        formik.touched.subject && Boolean(formik.errors.subject)
                      }
                    >
                      <InputLabel id="subject-label">
                        Choose a subject
                      </InputLabel>
                      <Select
                        labelId="subject-label"
                        id="subject"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                      >
                        <MenuItem value="Option 1">Option 1</MenuItem>
                        <MenuItem value="Option 2">Option 2</MenuItem>
                        <MenuItem value="Option 3">Option 3</MenuItem>
                        <MenuItem value="Option 4">Option 4</MenuItem>
                        <MenuItem value="Option 5">Option 5</MenuItem>
                      </Select>
                      {formik.touched.object && formik.errors.subject && (
                        <Typography color="error">
                          {formik.errors.subject}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="message"
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.message && Boolean(formik.errors.message)
                      }
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Contact;
