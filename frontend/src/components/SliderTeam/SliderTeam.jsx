import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCard from "../UserCard/UserCard";

function SliderTeam({ selectedRole, idProject }) {
  const [users, setUsers] = useState([]);

  const getUsersByProjectId = async (projectId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/projects/${projectId}/users`
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
    slidesToShow: 4,
    slidesToScroll: 3,
    spacing: "10px",
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {filteredUsers.map((user) => {
        return (
          <UserCard
            key={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            user_image={user.user_image}
            role={user.user_role}
          />
        );
      })}
    </Slider>
  );
}

export default SliderTeam;
