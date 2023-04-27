import { useEffect, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import UserCard from "../UserCard/UserCard";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import required modules

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
  return (
    <Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {filteredUsers.map((user) => {
          return (
            <SwiperSlide>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
export default SliderTeam;
