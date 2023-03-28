import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { useTheme } from "@material-ui/core/styles";
import { tokens } from "../../theme";

function UserAvatar() {
  const [userInitials, setUserInitials] = useState("");
  const [color, setColor] = useState("");
  const theme = useTheme();

  const { id } = useParams();
  const token = localStorage.getItem("token");

  const randomColor = () => {
    const colors = tokens(theme.palette.mode);
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const { firstname, lastname } = response.data;
        setUserInitials(
          <span>
            <span style={{ color: randomColor() }}>{firstname.charAt(0)}</span>
            <span style={{ color: randomColor() }}>{lastname.charAt(0)}</span>
          </span>
        );
        setColor(randomColor());
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, [id, token, theme]);

  return (
    <Avatar
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: color,
        margin: "0 auto",
      }}
    >
      {userInitials}
    </Avatar>
  );
}

export default UserAvatar;
