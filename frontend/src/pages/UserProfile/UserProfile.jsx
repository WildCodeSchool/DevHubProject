import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box } from "@material-ui/core";
import axios from "axios";
import Informations from "../../components/Informations/Informations";
import userimage from "../../assets/user.png";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import SendMessage from "../../components/SendMessage/SendMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: 0,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    height: "75vh",
    width: "100%",
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

function UserProfile() {
  const classes = useStyles();
  // const { id } = useParams(); // extrait l'ID de l'URL
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/1`)
      // utilise l'ID pour appeler l'API

      .then((response) => {
        setUser(response.data); // stocke les informations de l'utilisateur dans l'état local
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.error("user state:", user);

  if (!user) {
    return <div>Loading...</div>; // affiche "Loading..." si l'API n'a pas encore renvoyé les informations de l'utilisateur
  }

  console.error("user data:", user);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userimage}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Informations
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                phone={user.phone}
                city={user.city}
                email={user.email}
                github_page={user.github_page}
                biography={user.biography}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <ProjectsList />
              </Grid>
              <Grid item className={classes.sendMessageContainer}>
                <SendMessage />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
