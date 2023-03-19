/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Modal, Button, TextField, Paper } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as yup from "yup";
import LoginLink from "../../components/LoginLink/LoginLink";
import ForgetPasswordMessage from "../../components/ForgetPasswordMessage/ForgetPasswordMessage";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[0-9]).{9,}$/,
      "The password must contain at least 9 characters including 1 number"
    )
    .required("Password is required"),
});

const theme = createTheme();

export default function Login() {
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = parseInt(localStorage.getItem("userId"), 10);

    if (token) {
      axios
        .get(`http://localhost:5000/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.request.status === 200) {
            setTokenIsValid(true);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
          }
        })
        .catch((error) => {
          console.info(error);
        });
    }
  }, []);

  const toggle = parseInt(localStorage.getItem("toggle"), 10);
  if (tokenIsValid) {
    if (toggle) {
      localStorage.removeItem("token");
    } else {
      navigate("/dashboard");
    }
  }

  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `http://localhost:5000/users/login`,
          values
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId.toString());
        localStorage.setItem("toggle", response.data.toggle.toString());
        navigate("/dashboard");
      } catch (error) {
        setErrorMessage("Invalid email or password");
      }
    },
  });

  const { errors, touched } = formik;
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
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
        style={{ paddingTop: "1%", paddingBottom: "2%", marginTop: "5%" }}
      >
        <CssBaseline />
        <div style={{ marginTop: "5%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "5%",
            }}
          >
            <Avatar style={{ backgroundColor: "#82be00" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Login
            </Typography>
          </div>

          <form onSubmit={formik.handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              style={{ marginTop: "8%" }}
            >
              Login
            </Button>
            <Grid
              container
              style={{
                marginBottom: "10%",
                marginTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <Typography variant="body1" component="span">
                  <button type="button" onClick={handleOpen}>
                    Forgot password?
                  </button>
                </Typography>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Paper style={{ width: "50%", padding: "2rem" }}>
                    <Typography variant="h6" id="modal-title" align="center">
                      Forgot password?
                    </Typography>
                    <Typography
                      variant="body1"
                      id="modal-description"
                      align="center"
                    >
                      <ForgetPasswordMessage />
                    </Typography>
                    <Button onClick={handleClose}>Cancel</Button>
                  </Paper>
                </Modal>
              </Grid>
              <Grid item>
                <Link to="/register">
                  <button type="button">Don't have an account? Register</button>
                </Link>
              </Grid>
            </Grid>

            <Grid container>
              <LoginLink />
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
