import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

import ProjectsList from "../../components/ProjectsList/ProjectsList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: 0,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    height: "75vh",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  userImageContainer: {
    marginBottom: theme.spacing(5),
  },
  sendMessageContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

function MyProfile() {
  const classes = useStyles();

  const [projects, setProjects] = useState([]);

  const [currentUser, setCurrentUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState([currentUser]);

  const [firstname, setFirstname] = useState([currentUser]);
  const [lastname, setLastname] = useState([currentUser]);
  const [phone, setPhone] = useState([currentUser]);
  const [city, setCity] = useState([currentUser]);
  const [email, setEmail] = useState([currentUser]);
  const [github, setGithub] = useState([currentUser]);
  const [biography, setBiography] = useState([currentUser]);
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:5000/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.info(response.data);
        setCurrentUser(response.data);
        console.info(currentUser, "current");
      })
      .catch((error) => {
        console.info(error);
      });

    axios
      .get(`http://localhost:5000/users/${id}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.info(response.data);
        setProjects(response.data);
      })
      .catch((error) => {
        console.info(error);
      });
  }, [id]);

  const handleSaveChanges = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:5000/users/${id}`,
        { ...currentUser, ...userUpdate },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
    setUserUpdate({ ...userUpdate, firstname: event.target.value });
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
    setUserUpdate({ ...userUpdate, lastname: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setUserUpdate({ ...userUpdate, phone: event.target.value });
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setUserUpdate({ ...userUpdate, city: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setUserUpdate({ ...userUpdate, email: event.target.value });
  };

  const handleGithubChange = (event) => {
    setGithub(event.target.value);
    setUserUpdate({ ...userUpdate, github_page: event.target.value });
  };

  const handleBiographyChange = (event) => {
    setBiography(event.target.value);
    setUserUpdate({ ...userUpdate, biography: event.target.value });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFirstname(currentUser.firstname);
    setLastname(currentUser.lastname);
    setPhone(currentUser.phone);
    setCity(currentUser.city);
    setEmail(currentUser.email);
    setGithub(currentUser.github_page);
    setBiography(currentUser.biography);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setFirstname(currentUser.firstname);
    setLastname(currentUser.lastname);
    setPhone(currentUser.phone);
    setCity(currentUser.city);
    setEmail(currentUser.email);
    setGithub(currentUser.github_page);
    setBiography(currentUser.biography);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {isEditing ? (
            <form className={classes.root} noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.field}
                    label={`FirstName${
                      currentUser.firstname ? ` (${currentUser.firstname})` : ""
                    }`}
                    value={firstname}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      disableAnimation: true,
                      position: "top",
                    }}
                    type="text"
                    id="firstName"
                    onChange={handleFirstnameChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.field}
                    label={`LastName${
                      currentUser.lastname ? ` (${currentUser.lastname})` : ""
                    }`}
                    value={lastname}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      disableAnimation: true,
                      position: "top",
                    }}
                    type="text"
                    id="lastName"
                    onChange={handleLastnameChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.field}
                    label={`Phone${
                      currentUser.phone ? ` (${currentUser.phone})` : ""
                    }`}
                    value={phone}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      disableAnimation: true,
                      position: "top",
                    }}
                    type="text"
                    id="phone"
                    onChange={handlePhoneChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.field}
                    label={`City${
                      currentUser.city ? ` (${currentUser.city})` : ""
                    }`}
                    value={city}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      disableAnimation: true,
                      position: "top",
                    }}
                    type="text"
                    id="city"
                    onChange={handleCityChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.field}
                    label={`Email${
                      currentUser.email ? ` (${currentUser.email})` : ""
                    }`}
                    value={email}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      disableAnimation: true,
                      position: "top",
                    }}
                    type="email"
                    id="email"
                    onChange={handleEmailChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.field}
                    label={`Git-Hub Page${
                      currentUser.github_page
                        ? ` (${currentUser.github_page})`
                        : ""
                    }`}
                    value={github}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      disableAnimation: true,
                      position: "top",
                    }}
                    type="text"
                    id="githubPage"
                    onChange={handleGithubChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.field}
                    label={`Biography${
                      currentUser.biography ? ` (${currentUser.biography})` : ""
                    }`}
                    value={biography}
                    multiline
                    miniRows={6}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      disableAnimation: true,
                      position: "top",
                    }}
                    type="text"
                    id="biography"
                    onChange={handleBiographyChange}
                  />
                </Grid>
              </Grid>
            </form>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  label="FirstName"
                  value={currentUser.firstname}
                  fullWidth
                  disabled
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  label="LastName"
                  value={currentUser.lastname}
                  fullWidth
                  disabled
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  label="Phone Number"
                  value={currentUser.phone}
                  fullWidth
                  disabled
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  label="City"
                  value={currentUser.city}
                  fullWidth
                  disabled
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  label="Email"
                  value={currentUser.email}
                  fullWidth
                  disabled
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  label="Git-Hub Page"
                  value={currentUser.github_page}
                  fullWidth
                  disabled
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.field}
                  label="Biography"
                  value={currentUser.biography}
                  multiline
                  miniRows={6}
                  fullWidth
                  disabled
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
          )}

          <Grid>
            {isEditing ? (
              <>
                <Button
                  variant="contained"
                  className={classes.valider}
                  onClick={handleSaveChanges}
                >
                  Valider
                </Button>
                <Button
                  variant="contained"
                  className={classes.cancel}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                className={classes.modifier}
                onClick={handleEdit}
              >
                Modifier
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <ProjectsList projects={projects} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyProfile;
