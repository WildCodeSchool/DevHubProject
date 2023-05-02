import React, { useState, useEffect } from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
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
      sx={{
        width: "100%",
        height: "20em",
        p: "0.8em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
          borderRadius: "5px",
          textAlign: "center",
          boxShadow: "0px 7px 8px 0px rgba(83,84,85,0.65)",
        }}
      >
        <CardActionArea>
          <Box display="flex" justifyContent="center">
            <CardMedia
              sx={{
                cursor: "pointer",
                borderRadius: "50%",
                width: "70%",
                height: "70%",
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
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: colors.grey[100] }}
            >
              {`${firstname} ${lastname}`}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.safran[500] }}>
              {email}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: colors.grey[100] }}
            >
              {role}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>
    </Box>
  );
}

export default UserCard;
