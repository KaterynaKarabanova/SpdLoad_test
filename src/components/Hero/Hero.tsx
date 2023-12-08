import React from "react";
import Slider from "react-slick";
import arrowDown from "../../components/assets/arrowDown.svg";
import heroImageOne from "../../components/assets/heroImage1.jpg";
import heroImageTwo from "../../components/assets/heroImage2.jpg";
import heroImageThree from "../../components/assets/heroImage3.jpg";
import {
  CustomDotsListHero,
  HeroTextLink,
  HeroTitleDiv,
  HeroTitleLarge,
  HeroTitleSmall,
} from "./Hero.styled";
import {
  Container,
  HomeWrapper,
  ImgWrapper,
} from "../../pages/Home/Home.styled";
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
    <HomeWrapper>
      <Container>
        <HeroTitleDiv>
          <HeroTitleSmall>The space is waiting for</HeroTitleSmall>
          <HeroTitleLarge> YOU</HeroTitleLarge>
          <HeroTextLink href="#flightbar">
            <p>Explore tours</p>
            <img src={arrowDown} alt="" />
          </HeroTextLink>
        </HeroTitleDiv>

        <Slider {...settings}>
          <ImgWrapper>
            <img src={heroImageOne} alt="" />
          </ImgWrapper>
          <ImgWrapper>
            <img src={heroImageTwo} alt="" />
          </ImgWrapper>
          <ImgWrapper>
            <img src={heroImageThree} alt="" />
          </ImgWrapper>
        </Slider>
      </Container>
    </HomeWrapper>
  );
};
export default Hero;
