import React, { useState, useEffect } from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { tokens } from "../../theme";
import defaultUserImage from "../../assets/user.png";

function UserCard(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { firstname, lastname, email, role, userImage } = props;
  const userDefaultImage = userImage || defaultUserImage;
  const [userProfileImage, setUserProfileImage] = useState(userDefaultImage);

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

  return (
    <Box
      display="flex"
      justify-content="center"
      sx={{ width: "180px", height: "200px" }}
    >
      <Box>
        <Paper
          elevation="10"
          sx={{
            height: "180px",
            width: "100%",
            background: colors.primary[400],
            mt: "10px",
          }}
        >
          <CardActionArea>
            <Box display="flex" justifyContent="center">
              <CardMedia
                sx={{
                  pt: "0.5em",
                  cursor: "pointer",
                  borderRadius: "50%",
                  width: "40%",
                  height: "40%",
                }}
                component="img"
                image={userProfileImage}
                alt={`${firstname} ${lastname}`}
              />
            </Box>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                {`${firstname} ${lastname}`}
              </Typography>
              <Typography variant="body2" color="text.greenAccent">
                {email}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {role}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Paper>
      </Box>
    </Box>
  );
}

export default UserCard;
