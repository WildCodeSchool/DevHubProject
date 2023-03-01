import React from "react";
import Slider from "react-slick";
import Team from "../../data/userData";
import UserCard from "../UserCard/UserCard";

function SliderTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "50px",
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
      {Team.map((user, index) => {
        return (
          <UserCard
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            user_image={user.userImage}
            role={user.role}
          />
        );
      })}
    </Slider>
  );
}

export default SliderTeam;
