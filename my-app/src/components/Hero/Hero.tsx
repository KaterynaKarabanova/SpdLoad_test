import React from "react";
import Slider from "react-slick";
import heroImageOne from "../../components/assets/heroImage1.jpg";
import heroImageTwo from "../../components/assets/heroImage2.jpg";
import heroImageThree from "../../components/assets/heroImage3.jpg";
import { CustomDotsListHero } from "./Hero.styled";
const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    appendDots: (dots: any) => (
      // Render the custom dots list using styled-component

      <CustomDotsListHero>{dots}</CustomDotsListHero>
    ),
    nextArrow: (
      <div
        style={{
          display: "none",
        }}
      ></div>
    ),
    prevArrow: (
      <div
        style={{
          display: "none",
        }}
      ></div>
    ),
  };
  return (
    <div>
      <h1>Hero</h1>
      <Slider {...settings}>
        <div>
          <img src={heroImageOne} alt="" />
        </div>
        <div>
          <img src={heroImageTwo} alt="" />
        </div>
        <div>
          <img src={heroImageThree} alt="" />
        </div>
      </Slider>
    </div>
  );
};
export default Hero;
