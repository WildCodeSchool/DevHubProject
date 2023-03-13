/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicModal from "./BasicModal";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users", {
        email,
        hashedPassword,
      });

      if (response.data && response.data.user) {
        localStorage.setItem("userId", response.data.user.toString());
        localStorage.setItem("token", response.data.token);
        console.info(response.data);
        navigate("/dashboard");
      } else {
        setErr("Invalid email or password");
      }
    } catch (error) {
      setErr("Invalid email or password");
      console.error(error.message);
    }
  };
  console.info(err);
  return (
    <ThemeProvider theme={lightTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email adress"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setHashedPassword(event.target.value)}
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
              className={classes.submit}
            >
              LogIn
            </Button>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <BasicModal />
              </Grid>
              <Grid item xs={8}>
                <Button href="/register">have an account? Register</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
