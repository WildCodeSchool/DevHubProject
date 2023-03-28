import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";

const randomColor = () => {
  const colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#9E9E9E",
    "#607D8B",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

function UserAvatar() {
  const [userInitials, setUserInitials] = useState("");
  const [color, setColor] = useState("");

  const { id } = useParams();
  const token = localStorage.getItem("token");

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
  }, [id, token]);

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
