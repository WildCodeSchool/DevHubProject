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
  Box,
} from "@material-ui/core";
import Snackbar from "@mui/material/Snackbar";

function Contact() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

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
      console.info(values);
      setOpenSnackbar(true);
    },
  });

  return (
    <div className="Contact" style={{ marginTop: "10%" }}>
      <Grid container justifyContent="center">
        <Typography gutterBottom variant="h3" align="center" />
        <Grid item>
          <Box mt={3}>
            <Card
              style={{
                maxWidth: 450,
                padding: "2% 1%",
                backgroundColor: "#f5f5f5",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h3">
                  Contact Us
                </Typography>
                <Typography
                  variant="h6"
                  color="#FDB813"
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
                        InputProps={{ style: { color: "black" } }}
                        InputLabelProps={{ style: { color: "black" } }}
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
                        InputProps={{ style: { color: "black" } }}
                        InputLabelProps={{ style: { color: "black" } }}
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
                        InputProps={{ style: { color: "black" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="phone"
                        name="phone"
                        type="text"
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
                        InputProps={{ style: { color: "black" } }}
                        InputLabelProps={{ style: { color: "black" } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        fullWidth
                        required
                        error={
                          formik.touched.subject &&
                          Boolean(formik.errors.subject)
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
                          <MenuItem value="Option 1">General Inquiry</MenuItem>
                          <MenuItem value="Option 2">Product Support</MenuItem>
                          <MenuItem value="Option 3">
                            Partnership Opportunities
                          </MenuItem>
                          <MenuItem value="Option 4">Media Request</MenuItem>
                          <MenuItem value="Option 5">
                            Employment Opportunities
                          </MenuItem>
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
                          formik.touched.message &&
                          Boolean(formik.errors.message)
                        }
                        helperText={
                          formik.touched.message && formik.errors.message
                        }
                        InputProps={{ style: { color: "black" } }}
                        InputLabelProps={{ style: { color: "black" } }}
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
                    <Snackbar
                      open={openSnackbar}
                      autoHideDuration={8000}
                      onClose={() => setOpenSnackbar(false)}
                      message="Your message has been sent successfully!"
                    />
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
