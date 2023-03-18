import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
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
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    height: "75vh",
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
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
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [inbox, setInbox] = useState([]);

  const { id } = useParams();

  const handleSendMessage = (subject, message) => {
    const newMessage = {
      subject,
      message,
      date: new Date(),
    };
    setInbox([...inbox, newMessage]);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:5000/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.info(response.data);
        setUser(response.data);
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

  console.info(projects);

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
                firstname={user.firstname}
                lastname={user.lastname}
                phone={user.phone}
                city={user.city}
                email={user.email}
                githubPage={user.github_page}
                biography={user.biography}
              />
            </Grid>
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
          <Grid item className={classes.sendMessageContainer}>
            <SendMessage
              firstname={user.firstname}
              lastname={user.lastname}
              onSendMessage={handleSendMessage}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;
