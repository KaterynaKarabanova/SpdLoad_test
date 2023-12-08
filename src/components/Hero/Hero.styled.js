import styled from "styled-components";
import { CustomDotsList } from "../FlightBar/FlightBar.styled";
export const CustomDotsListHero = styled(CustomDotsList)`
  bottom: 300px;
  left: -40px;
  li {
    &.slick-active {
      button::before {
        opacity: 1;
        color: white;
      }
    }
    button {
      border: 1px solid white;
      &::before {
        color: transparent;
        top: -1.5px;
        left: 1.8px;
      }
    }
  }
`;
export const HeroTitleDiv = styled.div`
  position: absolute;
  top: 239px;
  left: 167px;
  z-index: 3;
`;
export const HeroTitleSmall = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Syne;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;
export const HeroTitleLarge = styled(HeroTitleSmall)`
  font-size: 310px;
  line-height: 0.9;
`;
export const HeroTextLink = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  position: absolute;
  left: 420px;
  bottom: -140px;
  gap: 8px;
  color: white;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
