/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Grid, useTheme } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { tokens } from "../../theme";
import ProfileCard from "../../components/MyProfile/ProfileCard/ProfileCard";
import AccountCard from "../../components/MyProfile/AccountCard/AccountCard";
// import ProjectsList from "../../components/ProjectsList/ProjectsList";

function MyProfile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [projects, setProjects] = useState([]);

  const [currentUser, setCurrentUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState([currentUser]);

  // const [firstname, setFirstname] = useState([currentUser]);
  // const [lastname, setLastname] = useState([currentUser]);
  // const [phone, setPhone] = useState([currentUser]);
  // const [city, setCity] = useState([currentUser]);
  // const [email, setEmail] = useState([currentUser]);
  // const [github, setGithub] = useState([currentUser]);
  // const [biography, setBiography] = useState([currentUser]);
  // const [isEditing, setIsEditing] = useState(false);

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

  // const handleSaveChanges = (event) => {
  //   event.preventDefault();

  //   const token = localStorage.getItem("token");
  //   axios
  //     .put(
  //       `http://localhost:5000/users/${id}`,
  //       { ...currentUser, ...userUpdate },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     )
  //     .then((response) => {
  //       setCurrentUser(response.data);
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const handleFirstnameChange = (event) => {
  //   setFirstname(event.target.value);
  //   setUserUpdate({ ...userUpdate, firstname: event.target.value });
  // };

  // const handleLastnameChange = (event) => {
  //   setLastname(event.target.value);
  //   setUserUpdate({ ...userUpdate, lastname: event.target.value });
  // };

  // const handlePhoneChange = (event) => {
  //   setPhone(event.target.value);
  //   setUserUpdate({ ...userUpdate, phone: event.target.value });
  // };

  // const handleCityChange = (event) => {
  //   setCity(event.target.value);
  //   setUserUpdate({ ...userUpdate, city: event.target.value });
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   setUserUpdate({ ...userUpdate, email: event.target.value });
  // };

  // const handleGithubChange = (event) => {
  //   setGithub(event.target.value);
  //   setUserUpdate({ ...userUpdate, github_page: event.target.value });
  // };

  // const handleBiographyChange = (event) => {
  //   setBiography(event.target.value);
  //   setUserUpdate({ ...userUpdate, biography: event.target.value });
  // };

  // const handleCancel = () => {
  //   setIsEditing(false);
  //   setFirstname(currentUser.firstname);
  //   setLastname(currentUser.lastname);
  //   setPhone(currentUser.phone);
  //   setCity(currentUser.city);
  //   setEmail(currentUser.email);
  //   setGithub(currentUser.github_page);
  //   setBiography(currentUser.biography);
  // };

  // const handleEdit = () => {
  //   setIsEditing(!isEditing);
  //   setFirstname(currentUser.firstname);
  //   setLastname(currentUser.lastname);
  //   setPhone(currentUser.phone);
  //   setCity(currentUser.city);
  //   setEmail(currentUser.email);
  //   setGithub(currentUser.github_page);
  //   setBiography(currentUser.biography);
  // };

  return (
    <div>
      <Grid container>
        <Grid
          xs={12}
          sx={{
            mt: { xs: "60px", sm: "20px", md: "20px" },
          }}
        >
          <Header
            title="YOUR PROFILE"
            subtitle="Welcome to your profile page"
          />
        </Grid>
        <Grid xs={12} sx={{ display: "flex" }}>
          <Grid item xs={12} md={7} sx={{ mt: "20px" }}>
            <AccountCard />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mt: "20px" }}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyProfile;
