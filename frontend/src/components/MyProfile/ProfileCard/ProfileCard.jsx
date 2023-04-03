/* eslint-disable jsx-a11y/img-redundant-alt */
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
import user from "../../../assets/john-doe.jpg";

function ProfileCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userData, setUserData] = useState(null);

  const { id } = useParams();

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
    <Grid xs={12} item sx={{ m: "20px" }}>
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
          <Grid xs={12} sx={{ flexGrow: "0", maxWidth: "25%", p: "0 15px" }}>
            <Box sx={{ position: "relative" }}>
              <img
                src={user}
                alt="Profile picture of user"
                style={{
                  maxWidth: "180px",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "50%",
                  verticalAlign: "middle",
                  borderStyle: "none",
                  transform: "translate(-50%, -30%)",
                  transition: "all 0.15s ease 0s",
                  boxShadow: "0px 0px 2rem rgba(136, 152, 170, 0.15)",
                }}
              />
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
          <Button
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              position: "relative",
              letterSpacing: "0.05em",
              border: `1px solid ${colors.grey[500]} `,
              background: colors.grey[200],
              color: colors.primary[500],
              "&:hover": {
                color: colors.grey[200],
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
              pt: "60px",
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

export default ProfileCard;
