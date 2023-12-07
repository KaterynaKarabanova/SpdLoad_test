import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { rockets } from "../../recoil/atoms";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import FlightCard from "../FlightCard/FlightCard";
import { getImage } from "../../helpers/getCardImage";
import { CustomDotsList } from "./FlightBar.styled";
const FlightBar: React.FC = () => {
  const [rocket, setRockets] = useRecoilState(rockets);
  useEffect(() => {
    const query = `
  query ExampleQuery {
    rockets {
      id
      name
      description
    }
  }
`;
    axios
      .post(
        "https://spacex-production.up.railway.app/",
        {
          query: query,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setRockets(response.data.data.rockets);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [setRockets]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots: any) => <CustomDotsList>{dots}</CustomDotsList>,
    nextArrow: (
      <div>
        <div
          className="next-slick-arrow"
          style={{
            position: "absolute",
            top: "-50px",
            right: "50px",
          }}
        >
          {" "}
          +⫸{" "}
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div
          className="prev-slick-arrow"
          style={{
            position: "absolute",
            top: "-50px",
            right: "90px",
          }}
        >
          {" "}
          -⫷{" "}
        </div>
      </div>
    ),
  };
  return (
    <div>
      <h1>FlightBar</h1>
      <Slider {...settings}>
        {rocket.map(({ id, name, description }, index) => {
          return (
            <FlightCard
              key={id}
              id={id}
              name={name}
              description={description}
              img={getImage(index)}
            />
          );
        })}
      </Slider>
    </div>
  );
};
export default FlightBar;
