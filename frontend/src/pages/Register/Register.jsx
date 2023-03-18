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
      messages.lastname = "Veuillez saisir votre nom";
    }
    if (!values.firstname) {
      messages.firstname = "Veuillez saisir votre prénom";
    }
    if (!values.email) {
      messages.email = "Veuillez saisir votre adresse e-mail";
    }
    if (!values.password) {
      messages.password = "Veuillez saisir un mot de passe";
    }
    if (!values.confirmPassword) {
      messages.confirmPassword = "Veuillez confirmer votre mot de passe";
    }
    return messages;
  };

  const handleSubmit = async (values) => {
    const messages = checkRequiredFields(values);
    if (Object.keys(messages).length === 0) {
      if (values.password !== values.confirmPassword) {
        setErrorMessage("Les mots de passe ne correspondent pas");
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
      setErrorMessage("Veuillez remplir tous les champs obligatoires");
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {success ? (
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Félicitations, vous êtes maintenant enregistré !" />
              <CardContent>
                <Typography>
                  Vous pouvez maintenant <Link to="/Login">vous connecter</Link>{" "}
                  avec vos identifiants.
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Créer un compte
              </Typography>
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
                  lastname: yup.string().required("Veuillez saisir votre nom"),
                  firstname: yup
                    .string()
                    .required("Veuillez saisir votre prénom"),
                  email: yup
                    .string()
                    .email("Veuillez saisir une adresse e-mail valide")
                    .required("Veuillez saisir votre adresse e-mail"),
                  password: yup
                    .string()
                    .min(
                      6,
                      "Le mot de passe doit contenir au moins 9 caractères dont 1 chiffre"
                    )
                    .required("Veuillez saisir un mot de passe"),
                  confirmPassword: yup
                    .string()
                    .oneOf(
                      [ref("password"), null],
                      "Les mots de passe ne correspondent pas"
                    )
                    .required("Veuillez confirmer votre mot de passe"),
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
                          label="Nom"
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
                          label="Prénom"
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
                          label="Adresse e-mail"
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
                          label="Mot de passe"
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
                          label="Confirmez votre mot de passe"
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
                    >
                      S'inscrire
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link to="/login">
                          Vous avez déjà un compte ? Connectez-vous
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
