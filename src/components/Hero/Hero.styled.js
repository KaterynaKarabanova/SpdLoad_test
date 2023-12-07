import styled from "styled-components";
import { CustomDotsList } from "../FlightBar/FlightBar.styled";
export const CustomDotsListHero = styled(CustomDotsList)`
  bottom: 340px;
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
        top: 2px;
        left: 2px;
      }
    }
  }
`;
