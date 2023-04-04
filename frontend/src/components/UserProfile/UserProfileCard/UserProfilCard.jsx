import { useState, useEffect } from "react";
import {
  Grid,
  useTheme,
  Paper,
  Box,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import { useParams } from "react-router-dom";
import { tokens } from "../../../theme";
import SendMessage from "../../SendMessage/SendMessage";

function UserProfileCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openSendMessage, setOpenSendMessage] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userProfileImage, setUserProfileImage] = useState(null);
  const { id } = useParams();

  const handleSendMessageClick = () => {
    setOpenSendMessage(true);
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const imageUrl = response.data.results[0].picture.large;
        setUserProfileImage(imageUrl);
      })
      .catch((error) => {
        console.info(error);
      });
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    const url = `http://localhost:5000/users/${id}`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(url, { headers });
      setUserData(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Grid item xs={12} sx={{ m: "20px" }}>
      <Paper
        elevation="10"
        sx={{
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
          position: "relative",
        }}
      >
        <Grid container sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid
            item
            xs={12}
            sx={{ flexGrow: "0", maxWidth: "25%", p: "0 15px" }}
          >
            <Box
              sx={{
                position: "relative",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              {userProfileImage ? (
                <img
                  src={userProfileImage}
                  alt="User_image"
                  style={{
                    maxWidth: "180px",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "50%",
                    verticalAlign: "middle",
                    borderStyle: "none",
                    transform: "translate(-50%, -20%)",
                    transition: "all 0.15s ease 0s",
                    boxShadow: "0px 0px 2rem rgba(136, 152, 170, 0.15)",
                  }}
                />
              ) : null}
            </Box>
          </Grid>
        </Grid>
        <CardContent
          sx={{
            p: "1rem",
            display: "flex",
            textAlign: "center",
            border: "0px !important",
            justifyContent: "space-between",
          }}
        >
          {openSendMessage ? (
            <SendMessage
              onSendMessage={() => console.info("Message sent")}
              firstname={userData?.firstname}
              lastname={userData?.lastname}
              open={openSendMessage}
              onClose={() => setOpenSendMessage(false)}
            />
          ) : null}

          <Button
            onClick={handleSendMessageClick}
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              position: "relative",
              letterSpacing: "0.05em",
              border: `1px solid ${colors.grey[500]}`,
              background: colors.grey[200],
              color: colors.primary[700],
              py: "12px",
              px: "1.5rem",
              fontWeight: "bold",
              borderRadius: "50px",
              boxShadow: "none",
              "&:hover": {
                background: colors.grey[300],
              },
            }}
          >
            Message
          </Button>
        </CardContent>

        <CardContent sx={{ pb: "24px" }}>
          <Box
            sx={{
              textAlign: "center",
              pt: "40px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: "0.5rem",
                fontWeight: "600",
                color: colors.grey[200],
              }}
            >
              {userData
                ? `${userData.firstname} ${userData.lastname}`
                : "Loading ..."}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pt: "0.8em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "300",
              }}
            >
              <LocationOnIcon sx={{ color: colors.safran[500], mr: "0.5em" }} />
              {userData ? userData.city : "Loading ..."}
            </Typography>
            <Typography
              variant="h5"
              sx={{ m: "1.5rem 0 0.5rem 0", color: colors.grey[200] }}
            >
              {userData ? userData.user_role : "Loading ..."}
            </Typography>
          </Box>
        </CardContent>
      </Paper>
    </Grid>
  );
}

export default UserProfileCard;
