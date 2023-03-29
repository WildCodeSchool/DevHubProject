import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import UserCard from "../UserCard/UserCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SliderTeam({ selectedRole, idProject }) {
  const [users, setUsers] = useState([]);

  const getUsersByProjectId = async (projectId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:5000/projects/${projectId}/users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(response.data);
      console.info("Users retrieved successfully:", response.data);
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    if (idProject) {
      console.info("Selected project ID:", idProject);
      getUsersByProjectId(idProject);
    }
  }, [idProject]);

  console.info("Filtered users:", users);

  const filteredUsers = selectedRole
    ? users.filter((user) => user.user_role === selectedRole)
    : users;

  console.info("Users filtered by role:", filteredUsers);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    spacing: "10px",
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...settings}
    >
      {filteredUsers.map((user) => {
        return (
          <Link
            to={`/user-profile/${user.id}`}
            key={user.id}
            style={{ textDecoration: "none" }}
          >
            <UserCard
              firstname={user.firstname}
              lastname={user.lastname}
              email={user.email}
              user_image={user.user_image}
              role={user.user_role}
            />
          </Link>
        );
      })}
    </Slider>
  );
}

export default SliderTeam;
