import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { rockets } from "../../recoil/atoms";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useQuery, gql } from "@apollo/client";
import FlightCard from "../FlightCard/FlightCard";
import { getImage } from "../../helpers/getCardImage";
import {
  ArrowDivNext,
  ArrowDivPrev,
  CustomDotsList,
  ErrorText,
  FlightBarTitle,
  FlightBarWrapper,
} from "./FlightBar.styled";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import { Container } from "../../pages/Home/Home.styled";
const FlightBar: React.FC = () => {
  const [rocket, setRockets] = useRecoilState(rockets);

  const GET_BOOKS = gql`
    query GetBooks {
      rockets {
        id
        name
        description
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log(data);

  useEffect(() => {
    if (!loading && !error) {
      setRockets(data?.rockets || []);
    }
  }, [loading, error, data, setRockets]);
  if (loading) return <ErrorText>Loading...</ErrorText>;
  if (error)
    return <ErrorText>Something went wrong. Try reloading the page</ErrorText>;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots: any) => <CustomDotsList>{dots}</CustomDotsList>,
    nextArrow: (
      <div>
        <ArrowDivNext className="next-slick-arrow">
          <img src={arrowRight} alt="" />
        </ArrowDivNext>
      </div>
    ),
    prevArrow: (
      <div>
        <ArrowDivPrev className="prev-slick-arrow">
          <img src={arrowLeft} alt="" />
        </ArrowDivPrev>
      </div>
    ),
  };
  return (
    <Container id="flightbar">
      <FlightBarWrapper>
        <FlightBarTitle>popular tours</FlightBarTitle>
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
      </FlightBarWrapper>
    </Container>
  );
};
export default FlightBar;
