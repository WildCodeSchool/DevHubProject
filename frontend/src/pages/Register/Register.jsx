/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  CssBaseline,
  TextField,
  Button,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { ref } from "yup";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import RegisterContext from "../../context/RegisterContext";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const { formValues, setFormValues } = useContext(RegisterContext);
  const { lastname, firstname, email, password } = formValues;

  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const classes = useStyles();

  const checkRequiredFields = (values) => {
    const messages = {};
    if (!values.lastname) {
      messages.lastname = "Please enter your name";
    }
    if (!values.firstname) {
      messages.firstname = "Please enter your first name";
    }
    if (!values.email) {
      messages.email = "Please enter your email address";
    }
    if (!values.password) {
      messages.password = "Please enter a password";
    }
    if (!values.confirmPassword) {
      messages.confirmPassword = "Please confirm your password";
    }
    return messages;
  };

  const handleSubmit = async (values) => {
    const messages = checkRequiredFields(values);
    if (Object.keys(messages).length === 0) {
      if (values.password !== values.confirmPassword) {
        setErrorMessage("Passwords do not match");
      } else {
        try {
          console.info(values, "password");
          // Call API POST to create a new user
          await axios.post("http://localhost:5000/users", values);
          setFormValues({ ...formValues, ...values });
          setSuccess(true);
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      setErrorMessage("Please fill in all mandatory fields");
    }

    console.info("firstname:", values.firstname);
    console.info("lastname:", values.lastname);
    console.info("email:", values.email);
    console.info("password:", values.password);
    console.info("confirmPassword:", values.confirmPassword);
    console.info("values:", values);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={lightTheme}>
      {errorMessage && (
        <Typography color="error" variant="subtitle1">
          {errorMessage}
        </Typography>
      )}
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          boxShadow:
            "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
        style={{ paddingTop: "3%", paddingBottom: "3%", marginTop: "5%" }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          {success ? (
            <Card
              sx={{ maxWidth: 800 }}
              style={{ paddingTop: "1%", paddingBottom: "2%", marginTop: "5%" }}
            >
              <CardHeader title="Congratulations, you are now registered!" />
              <CardContent>
                <Typography>
                  You can now <Link to="/Login">connect</Link> with your
                  credentials.
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "5%",
                }}
              >
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
                </Typography>
              </div>
              <Formik
                initialValues={{
                  lastname,
                  firstname,
                  email,
                  password,
                  confirmPassword: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={yup.object().shape({
                  lastname: yup.string().required("Please enter your name"),
                  firstname: yup
                    .string()
                    .required("Please enter your first name"),
                  email: yup
                    .string()
                    .email("Please enter a valid email address")
                    .required("Please enter your email address"),
                  password: yup
                    .string()
                    .min(
                      6,
                      "The password must contain at least 9 characters including 1 number"
                    )
                    .required("Please enter a password"),
                  confirmPassword: yup
                    .string()
                    .oneOf([ref("password"), null], "Passwords do not match")
                    .required("Please confirm your password"),
                })}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit} className={classes.form}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          required
                          fullWidth
                          id="lastname"
                          label="LastName"
                          name="lastname"
                          autoComplete="lname"
                          error={
                            formik.touched.lastname &&
                            Boolean(formik.errors.lastname)
                          }
                          helperText={
                            formik.touched.lastname && formik.errors.lastname
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          required
                          fullWidth
                          id="firstname"
                          label="FirstName"
                          name="firstname"
                          autoComplete="fname"
                          error={
                            formik.touched.firstname &&
                            Boolean(formik.errors.firstname)
                          }
                          helperText={
                            formik.touched.firstname && formik.errors.firstname
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="E-mail adress"
                          name="email"
                          autoComplete="email"
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          id="password"
                          autoComplete="current-password"
                          error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                          }
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={handleShowPasswordClick}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          required
                          fullWidth
                          name="confirmPassword"
                          label="Confirm password"
                          type={showPassword ? "text" : "password"}
                          id="confirmPassword"
                          autoComplete="confirm-password"
                          error={
                            formik.touched.confirmPassword &&
                            Boolean(formik.errors.confirmPassword)
                          }
                          helperText={
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                          }
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            ),
                          }}
                          {...formik.getFieldProps("confirmPassword")}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{ marginTop: "10%" }}
                    >
                      Register
                    </Button>
                    <Grid container justifyContent="flex-start">
                      <Grid item>
                        <Link to="/login">
                          <button type="button">
                            Already have an account ? Login
                          </button>
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}
