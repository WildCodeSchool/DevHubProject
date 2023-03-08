import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Team from "../../data/userData";
import UserCard from "../UserCard/UserCard";

function SliderTeam() {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => response.data)
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            user_image={user.user_image}
            role={user.role}
          />
        );
      })}
    </Slider>
  );
}

export default SliderTeam;
