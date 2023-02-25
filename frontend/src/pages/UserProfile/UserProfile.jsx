import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent } from "@material-ui/core";
import Informations from "../../components/UserProfile/Informations/Informations";
import UserImage from "../../components/UserProfile/UserImage/UserImage";
import ProjectsList from "../../components/UserProfile/ProjectsList/ProjectsList";
import SendMessage from "../../components/UserProfile/SendMessage/SendMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    marginBottom: theme.spacing(2),
  },

  userImageContainer: {
    marginBottom: theme.spacing(5),
  },
  projectsListContainer: {
    marginBottom: theme.spacing(2),
  },
  sendMessage: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.userImageContainer}>
                <UserImage
                  firstName={userProfile.firstName}
                  lastName={userProfile.lastName}
                />
              </div>
              <div className={classes.projectsListContainer}>
                <ProjectsList />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.sendMessage}>
          <SendMessage
            firstName={userProfile.firstName}
            lastName={userProfile.lastName}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
