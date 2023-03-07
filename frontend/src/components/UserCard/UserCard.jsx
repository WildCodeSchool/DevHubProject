import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import defaultUserImage from "../../assets/user.png";

function UserCard(props) {
  const { firstname, lastname, email, userImage, role } = props;
  const userDefautImage = userImage || defaultUserImage;

  return (
    <Box display="flex" justify-content="center" sx={{ width: "200px" }}>
      <Box>
        <Card sx={{ height: "200px", width: "200px" }}>
          <CardActionArea>
            <Box display="flex" justifyContent="center">
              <CardMedia
                sx={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  width: "50%",
                }}
                component="img"
                height="100"
                image={userDefautImage}
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
              <Typography gutterBottom variant="h3" component="div">
                {`${firstname} ${lastname}`}
              </Typography>
              <Typography variant="body2" color="text.greenAccent">
                {email}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {role}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}

export default UserCard;
