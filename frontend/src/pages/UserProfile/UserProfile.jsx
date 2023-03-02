import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Informations from "../../components/Informations/Informations";
import UserImage from "../../components/UserImage/UserImage";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import SendMessage from "../../components/SendMessage/SendMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: 0,
  },
  paper: {
    padding: theme.spacing(2),
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

const userProfile = {
  firstName: "Jean",
  lastName: "Dupont",
  gender: "Male",
  phoneNumber: "0123456789",
  city: "Paris",
  country: "France",
  nationality: "French",
  email: "jean.dupont@mail.com",
  website: "https://www.jeandupont.com",
  githubPage: "https://github.com/jeandupont",
  biography:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus ex quis ante ullamcorper, vitae malesuada elit lobortis. Sed faucibus ex quis ante ullamcorper, vitae malesuada elit lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
};

function UserProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Informations
              firstName={userProfile.firstName}
              lastName={userProfile.lastName}
              gender={userProfile.gender}
              phoneNumber={userProfile.phoneNumber}
              city={userProfile.city}
              country={userProfile.country}
              nationality={userProfile.nationality}
              email={userProfile.email}
              website={userProfile.website}
              githubPage={userProfile.githubPage}
              biography={userProfile.biography}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={3}>
            <Grid item xs={12}>
              <UserImage
                firstName={userProfile.firstName}
                lastName={userProfile.lastName}
              />
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <ProjectsList />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justify="center"
            className={classes.sendMessageContainer}
          >
            <SendMessage
              firstName={userProfile.firstName}
              lastName={userProfile.lastName}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
